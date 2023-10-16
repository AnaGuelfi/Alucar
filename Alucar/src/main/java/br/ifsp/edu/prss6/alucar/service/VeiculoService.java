package br.ifsp.edu.prss6.alucar.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.ifsp.edu.prss6.alucar.domain.model.Aluguel;
import br.ifsp.edu.prss6.alucar.domain.model.StatusAluguel;
import br.ifsp.edu.prss6.alucar.domain.model.Usuario;
import br.ifsp.edu.prss6.alucar.domain.model.Veiculo;
import br.ifsp.edu.prss6.alucar.repository.AluguelRepository;
import br.ifsp.edu.prss6.alucar.repository.UsuarioRepository;
import br.ifsp.edu.prss6.alucar.repository.VeiculoRepository;

import org.springframework.dao.EmptyResultDataAccessException;

@Service
public class VeiculoService {
	
	@Autowired
	private VeiculoRepository veiculoRepository;
	
	@Autowired
	private AluguelRepository aluguelRepository;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public Veiculo update (Long id, Veiculo veiculo) {
		Veiculo veiculoSaved = findVeiculoById(id);
		BeanUtils.copyProperties(veiculo, veiculoSaved, "id");
		return veiculoRepository.save(veiculoSaved);
	}
	
	public Veiculo findVeiculoById(Long id) {
		Veiculo veiculoSaved = veiculoRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return veiculoSaved;		
	}
	
	public List<Veiculo> listVeiculosDisponiveis(){
		List<Veiculo> todosVeiculos = veiculoRepository.findAll();
		List<Veiculo> veiculosIndisponiveis = new ArrayList<>();
		List<Aluguel> listaAluguel = aluguelRepository.findAll();
		for(Aluguel a: listaAluguel) {
			if(!a.getStatus().equals(StatusAluguel.CONCLUIDO)) {
				veiculosIndisponiveis.add(a.getVeiculo());
			}
		}
		
		List<Veiculo> veiculosDisponiveis;
		veiculosDisponiveis = todosVeiculos.stream()
				.filter(v -> {
					return veiculosIndisponiveis.stream()
							.map(Veiculo::getId)
							.noneMatch(v2 -> v2.equals(v.getId()));
				}).collect(Collectors.toList());
		
		return veiculosDisponiveis;
	}
	
	public List<Veiculo> listByUser(String email){
		Optional<Usuario> usuario = usuarioRepository.findByEmail(email);
		if(usuario.isPresent()) {
			return veiculoRepository.findByUsuario(usuario.get());
		}
		return null;
	}
	
	public void updateCrlv(Long id, LocalDate novaData) {
		Veiculo veiculoSaved = findVeiculoById(id);
		veiculoSaved.getCrlv().setDataEmissao(novaData);
		veiculoRepository.save(veiculoSaved);
	}
}
