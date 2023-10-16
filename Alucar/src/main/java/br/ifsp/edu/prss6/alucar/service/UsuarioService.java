package br.ifsp.edu.prss6.alucar.service;

import java.time.LocalDate;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.dao.EmptyResultDataAccessException;

import br.ifsp.edu.prss6.alucar.domain.model.CNH;
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
	
	public void updateDataCnh(Long id, LocalDate novaData) {
		Usuario usuarioSaved = findUsuarioById(id);
		usuarioSaved.getCnh().setDataValidade(novaData);
		usuarioRepository.save(usuarioSaved);
	}
	
	public void insertCnh(Long id, CNH cnh) {
		CNH novaCNH = new CNH();
		novaCNH.setCategoria(cnh.getCategoria());
		novaCNH.setDataValidade(cnh.getDataValidade());
		novaCNH.setNumeroRegistro(cnh.getNumeroRegistro());
		
		Usuario usuarioSaved = findUsuarioById(id);
		usuarioSaved.setCnh(novaCNH);
		usuarioRepository.save(usuarioSaved);
	}
}
