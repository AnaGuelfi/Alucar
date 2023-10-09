package br.ifsp.edu.prss6.alucar.service;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.ifsp.edu.prss6.alucar.domain.model.Aluguel;
import br.ifsp.edu.prss6.alucar.domain.model.StatusAluguel;
import br.ifsp.edu.prss6.alucar.domain.model.TermoComprometimento;
import br.ifsp.edu.prss6.alucar.domain.model.Usuario;
import br.ifsp.edu.prss6.alucar.domain.model.Veiculo;
import br.ifsp.edu.prss6.alucar.repository.AluguelRepository;
import br.ifsp.edu.prss6.alucar.repository.UsuarioRepository;
import br.ifsp.edu.prss6.alucar.repository.VeiculoRepository;
import br.ifsp.edu.prss6.alucar.service.exception.InvalidAluguelException;

@Service
public class AluguelService {
	
	@Autowired
	private AluguelRepository aluguelRepository;
	
	@Autowired
	private VeiculoRepository veiculoRepository;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public Aluguel save(Aluguel aluguel) {
		Optional<Usuario> locatario = usuarioRepository.findById(aluguel.getLocatario().getId());
		validarCNH(locatario);
		
		Optional<Usuario> locador = usuarioRepository.findById(aluguel.getLocador().getId());
		
		Optional<Veiculo> veiculo = veiculoRepository.findById(aluguel.getVeiculo().getId());
		validarRenavam(veiculo);
		
		definirDataPrevistaEntrega(aluguel);
		
		definirStatus(aluguel);
		
		emitirTermoConsentimento(aluguel, locatario, locador, veiculo);
				
		return aluguelRepository.save(aluguel);
	}
	
	public void updateTermoComprometimento(Long id) {
		Aluguel aluguelSaved = findAluguelById(id);
		
		TermoComprometimento termo = new TermoComprometimento();
		String termoComprometimento = "Eu, " + aluguelSaved.getLocador().getNome() + ", portador do CPF, " + aluguelSaved.getLocador().getCpf()
				+ " declaro que me responsabilizo em entregar o veículo selecionado por, " + aluguelSaved.getLocatario().getNome()
				+ ", de CPF " + aluguelSaved.getLocatario().getCpf() + ", nas condições informadas nas fotos cadastradas. Veículo de " 
				+ "placa " + aluguelSaved.getVeiculo().getPlaca() + " e Renavam " + aluguelSaved.getVeiculo().getCrlv().getRenavam() + ".";
		
		termo.setMensagem(termoComprometimento);
		termo.setAssinaturaLocador(LocalDate.now());
		aluguelSaved.setTermoComprometimento(termo);
		definirStatus(aluguelSaved);
		aluguelRepository.save(aluguelSaved);
	}
	
	public void validarCNH(Optional<Usuario> usuario) {
		if(!usuario.isPresent() || 
					usuario.get().getCnh() == null || 
					usuario.get().getCnh().getDataValidade().isBefore(LocalDate.now())) {
			System.out.println("Usuario");
			throw new InvalidAluguelException();
		}
	}
	
	public void validarRenavam(Optional<Veiculo> veiculo) {
		if(!veiculo.isPresent() || 
					veiculo.get().getCrlv() == null || 
					veiculo.get().getCrlv().getDataEmissao().getYear() < LocalDate.now().getYear() ) {
				System.out.println("Veiculo");
			throw new InvalidAluguelException();
		}
	}
	
	public void definirDataPrevistaEntrega(Aluguel aluguel) {
		aluguel.setDataPrevistaEntrega(aluguel.getDataRetirada().plusDays(aluguel.getPeriodo()));
	}
	
	public void definirStatus(Aluguel aluguel) {
		if(aluguel.getTermoComprometimento() == null || aluguel.getTermoConsentimento() == null) {
			aluguel.setStatus(StatusAluguel.PENDENTE);
		} else if(aluguel.getTermoComprometimento() != null && aluguel.getTermoConsentimento() != null){
			if(aluguel.getDataPrevistaEntrega().isAfter(LocalDate.now())){
				aluguel.setStatus(StatusAluguel.ATIVO);
			}else {
				aluguel.setStatus(StatusAluguel.ATRASADO);
			}
		} else if(aluguel.getDataEntrega() != null){
			aluguel.setStatus(StatusAluguel.CONCLUIDO);
		}
	}
	
	public void emitirTermoConsentimento(Aluguel aluguel, Optional<Usuario> locatario, Optional<Usuario> locador, Optional<Veiculo> veiculo) {
		String termoConsentimento = "Eu, " + locatario.get().getNome() + ", portador do CPF, " + locatario.get().getCpf() 
				+ " declaro que me responsabilizo por possíveis avarias, roubos e furtos que acontecerem com o veículo deste aluguel, de propriedade de "
				+ locador.get().getNome() + ", de CPF " + locador.get().getCpf() + ". O veículo alugado possui a placa "
				+ veiculo.get().getPlaca() + " e Renavam " + veiculo.get().getCrlv().getRenavam() + "."
				+ "Caso tenha atraso na devolução do veículo, será cobrada uma taxa de multa de 10% do valor acordado a cada dia de atraso.";
		aluguel.getTermoConsentimento().setMensagem(termoConsentimento);
		
		aluguel.getTermoConsentimento().setAssinaturaLocatario(LocalDate.now());
	}
	
	public void setCancelamento(Long id) {
		Aluguel aluguel = findAluguelById(id);
		aluguel.setStatus(StatusAluguel.CANCELADO);
		
		LocalDate dataRetirada = aluguel.getDataRetirada();
		if(dataRetirada.equals(LocalDate.now())) {
			aluguel.getTermoConsentimento().setValorMulta(aluguel.getValor());
		}
		aluguelRepository.save(aluguel);
	}
	
	public Aluguel update (Long id, Aluguel aluguel) {
		Aluguel aluguelSaved = findAluguelById(id);
		BeanUtils.copyProperties(aluguel, aluguelSaved, "id");
		return aluguelRepository.save(aluguelSaved);
	}
	
	public Aluguel findAluguelById(Long id) {
		Aluguel aluguelSaved = aluguelRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return aluguelSaved;		
	}

}
