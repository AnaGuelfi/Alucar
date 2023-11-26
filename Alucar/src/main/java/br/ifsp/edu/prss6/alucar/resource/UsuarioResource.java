package br.ifsp.edu.prss6.alucar.resource;

import java.time.LocalDate;
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

import br.ifsp.edu.prss6.alucar.domain.model.CNH;
import br.ifsp.edu.prss6.alucar.domain.model.Usuario;
import br.ifsp.edu.prss6.alucar.repository.UsuarioRepository;
import br.ifsp.edu.prss6.alucar.service.UsuarioService;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@RestController
@RequestMapping("/usuarios")
public class UsuarioResource {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private UsuarioService usuarioService;
	
	
	@PreAuthorize("hasAuthority('ROLE_SEARCH_USER') and #oauth2.hasScope('read')")
	@GetMapping
	public List<Usuario> list(){
		return usuarioRepository.findAll();
	}
	
	//@PreAuthorize("hasAuthority('ROLE_REGISTER_USER') and #oauth2.hasScope('write')")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Usuario create(@Valid @RequestBody Usuario usuario, HttpServletResponse response) {
		return usuarioService.save(usuario);
	}
	
	@PreAuthorize("hasAuthority('ROLE_SEARCH_USER') and #oauth2.hasScope('read')")
	@GetMapping("/{id}")
	public ResponseEntity<Usuario> findById(@PathVariable Long id){
		Optional<Usuario> usuario = usuarioRepository.findById(id);
		if(usuario.isPresent()) {
			return ResponseEntity.ok(usuario.get());
		}
		return ResponseEntity.notFound().build();
	}
	
	@PreAuthorize("hasAuthority('ROLE_REMOVE_USER') and #oauth2.hasScope('write')")
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void remove(@PathVariable Long id) {
		usuarioRepository.deleteById(id);
	}
	
	@PreAuthorize("hasAuthority('ROLE_UPDATE_USER') and #oauth2.hasScope('write')")
	@PutMapping("/{id}")
	public ResponseEntity<Usuario> update(@PathVariable Long id, @Valid @RequestBody Usuario usuario){
		Usuario usuarioSaved = usuarioService.update(id, usuario);
		return ResponseEntity.ok(usuarioSaved);
	}
	
	@PreAuthorize("hasAuthority('ROLE_UPDATE_USER') and #oauth2.hasScope('write')")
	@PutMapping("/{id}/cnh")
	public void insertCnh(@PathVariable Long id, @Valid @RequestBody CNH cnh){
		usuarioService.insertCnh(id, cnh);
	}
	
	@PreAuthorize("hasAuthority('ROLE_UPDATE_USER') and #oauth2.hasScope('write')")
	@PutMapping("/{id}/datacnh")
	public void updateDataCnh(@PathVariable Long id, @Valid @RequestBody LocalDate novaData){
		usuarioService.updateDataCnh(id, novaData);
	}
}
