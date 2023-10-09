package br.ifsp.edu.prss6.alucar.resource;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

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

import br.ifsp.edu.prss6.alucar.domain.model.Aluguel;
import br.ifsp.edu.prss6.alucar.repository.AluguelRepository;
import br.ifsp.edu.prss6.alucar.service.AluguelService;

@RestController
@RequestMapping("/alugueis")
public class AluguelResource {
	
	@Autowired
	private AluguelRepository aluguelRepository;
	
	@Autowired
	private AluguelService aluguelService;
	
	@PreAuthorize("hasAuthority('ROLE_SEARCH_RENTAL') and #oauth2.hasScope('read')")
	@GetMapping
	public List<Aluguel> list(){
		return aluguelRepository.findAll();
	}
	
	@PreAuthorize("hasAuthority('ROLE_REGISTER_RENTAL') and #oauth2.hasScope('write')")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Aluguel create(@Valid @RequestBody Aluguel aluguel, HttpServletResponse response) {
		return aluguelService.save(aluguel);
	}
	
	@PreAuthorize("hasAuthority('ROLE_SEARCH_RENTAL') and #oauth2.hasScope('read')")
	@GetMapping("/{id}")
	public ResponseEntity<Aluguel> findById(@PathVariable Long id){
		Optional<Aluguel> aluguel = aluguelRepository.findById(id);
		if(aluguel.isPresent()) {
			return ResponseEntity.ok(aluguel.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@PreAuthorize("hasAuthority('ROLE_REMOVE_RENTAL') and #oauth2.hasScope('write')")
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remove(@PathVariable Long id) {
		aluguelRepository.deleteById(id);
	}
	
	@PreAuthorize("hasAuthority('ROLE_REGISTER_RENTAL') and #oauth2.hasScope('write')")
	@PutMapping("/{id}")
	public ResponseEntity<Aluguel> update(@PathVariable Long id, @Valid @RequestBody Aluguel aluguel){
		Aluguel aluguelSaved = aluguelService.update(id, aluguel);
		return ResponseEntity.ok(aluguelSaved);
	}
	
	@PreAuthorize("hasAuthority('ROLE_REGISTER_RENTAL') and #oauth2.hasScope('write')")
	@PutMapping("/{id}/comprometimento")
	public void updateTermoComprometimento(@PathVariable Long id){
		aluguelService.updateTermoComprometimento(id);
	}
	
	@PreAuthorize("hasAuthority('ROLE_REGISTER_RENTAL') and #oauth2.hasScope('write')")
	@PutMapping("/{id}/cancelamento")
	public void setCancelamento(@PathVariable Long id){
		aluguelService.setCancelamento(id);
	}
	
	@PreAuthorize("hasAuthority('ROLE_REGISTER_RENTAL') and #oauth2.hasScope('write')")
	@PutMapping("/{id}/entrega")
	public void setEntrega(@PathVariable Long id){
		aluguelService.setEntrega(id);
	}
}
