package br.ifsp.edu.prss6.alucar.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.dao.EmptyResultDataAccessException;

import br.ifsp.edu.prss6.alucar.domain.model.Usuario;
import br.ifsp.edu.prss6.alucar.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public Usuario update (Long id, Usuario usuario) {
		Usuario usuarioSaved = findUsuarioById(id);
		BeanUtils.copyProperties(usuario, usuarioSaved, "id");
		return usuarioRepository.save(usuarioSaved);
	}
	
	public Usuario findUsuarioById(Long id) {
		Usuario usuarioSaved = usuarioRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return usuarioSaved;		
	}
}
