package br.ifsp.edu.prss6.alucar.resource;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.ifsp.edu.prss6.alucar.domain.model.Veiculo;
import br.ifsp.edu.prss6.alucar.repository.VeiculoRepository;
import br.ifsp.edu.prss6.alucar.service.VeiculoService;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping("/veiculos")
public class VeiculoResource {
	
	@Autowired
	private VeiculoService veiculoService;
	
	@Autowired
	private VeiculoRepository veiculoRepository;
	
	@PreAuthorize("hasAuthority('ROLE_SEARCH_CAR') and #oauth2.hasScope('read')")
	@GetMapping
	public List<Veiculo> list(){
		return veiculoRepository.findAll();
	}
	
	@PreAuthorize("hasAuthority('ROLE_SEARCH_CAR') and #oauth2.hasScope('read')")
	@GetMapping("/disponiveis")
	public List<Veiculo> listVeiculosDisponiveis(){
		return veiculoService.listVeiculosDisponiveis();
	}
	
	@PreAuthorize("hasAuthority('ROLE_REGISTER_CAR') and #oauth2.hasScope('write')")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Veiculo create(@Valid @RequestBody Veiculo veiculo, HttpServletResponse response) {
		return veiculoRepository.save(veiculo);
	}
	
	@PreAuthorize("hasAuthority('ROLE_SEARCH_CAR') and #oauth2.hasScope('read')")
	@GetMapping("/{id}")
	public ResponseEntity<Veiculo> findById(@PathVariable Long id){
		Optional<Veiculo> veiculo = veiculoRepository.findById(id);
		if(veiculo.isPresent()) {
			return ResponseEntity.ok(veiculo.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@PreAuthorize("hasAuthority('ROLE_SEARCH_CAR') and #oauth2.hasScope('read')")
	@GetMapping("/usuario/{email}")
	public ResponseEntity<List<Veiculo>> listByUser(@PathVariable String email){
		List<Veiculo> veiculos = veiculoService.listByUser(email);
		if(!veiculos.isEmpty()) {
			return ResponseEntity.ok(veiculos);
		}
		return ResponseEntity.notFound().build();
	}
	
	
	@PreAuthorize("hasAuthority('ROLE_REMOVE_CAR') and #oauth2.hasScope('write')")
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remove(@PathVariable Long id) {
		veiculoRepository.deleteById(id);
	}
	
	@PreAuthorize("hasAuthority('ROLE_REGISTER_CAR') and #oauth2.hasScope('write')")
	@PutMapping("/{id}")
	public ResponseEntity<Veiculo> update(@PathVariable Long id, @Valid @RequestBody Veiculo veiculo){
		Veiculo veiculoSaved = veiculoService.update(id, veiculo);
		return ResponseEntity.ok(veiculoSaved);
	}
	
	@PreAuthorize("hasAuthority('ROLE_REGISTER_CAR') and #oauth2.hasScope('write')")
	@PutMapping("/{id}/crlv")
	public void updateCrlv(@PathVariable Long id, @Valid @RequestBody LocalDate novaData){
		System.out.println(novaData);
		veiculoService.updateCrlv(id, novaData);
	}
}
