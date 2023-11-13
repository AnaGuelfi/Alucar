package br.ifsp.edu.prss6.alucar.resource;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.ifsp.edu.prss6.alucar.domain.model.Endereco;
import br.ifsp.edu.prss6.alucar.repository.EnderecoRepository;
import br.ifsp.edu.prss6.alucar.service.EnderecoService;



@RestController
@RequestMapping("/enderecos")
public class EnderecoResource {
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	
	@Autowired
	private EnderecoService enderecoService;
	
	@PreAuthorize("hasAuthority('ROLE_SEARCH_ADDRESS') and #oauth2.hasScope('read')")
	@GetMapping
	public List<Endereco> list(){
		return enderecoRepository.findAll();
	}
	
	@PreAuthorize("hasAuthority('ROLE_REGISTER_ADDRESS') and #oauth2.hasScope('write')")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Endereco create(@Valid @RequestBody Endereco endereco, HttpServletResponse response) {
		return enderecoRepository.save(endereco);
	}
	
	@PreAuthorize("hasAuthority('ROLE_SEARCH_ADDRESS') and #oauth2.hasScope('read')")
	@GetMapping("/{id}")
	public ResponseEntity<Endereco> findById(@PathVariable Long id){
		Optional<Endereco> endereco = enderecoRepository.findById(id);
		if(endereco.isPresent()) {
			return ResponseEntity.ok(endereco.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@PreAuthorize("hasAuthority('ROLE_REGISTER_ADDRESS') and #oauth2.hasScope('write')")
	@PutMapping("/{id}")
	public ResponseEntity<Endereco> update(@PathVariable Long id, @Valid @RequestBody Endereco endereco){
		Endereco enderecoSaved = enderecoService.update(id, endereco);
		return ResponseEntity.ok(enderecoSaved);
	}
	
}
