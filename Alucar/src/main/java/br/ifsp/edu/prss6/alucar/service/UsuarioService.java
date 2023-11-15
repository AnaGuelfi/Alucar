package br.ifsp.edu.prss6.alucar.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import br.ifsp.edu.prss6.alucar.domain.model.CNH;
import br.ifsp.edu.prss6.alucar.domain.model.Permissao;
import br.ifsp.edu.prss6.alucar.domain.model.Usuario;
import br.ifsp.edu.prss6.alucar.repository.EnderecoRepository;
import br.ifsp.edu.prss6.alucar.repository.PermissaoRepository;
import br.ifsp.edu.prss6.alucar.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private PermissaoRepository permissaoRepository;
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	
	public Usuario save(Usuario user) {
		user.setSenha(new BCryptPasswordEncoder().encode(user.getSenha()));
		user.setPermissoes(addCommonUserPermissions());
		enderecoRepository.save(user.getEndereco());
		return usuarioRepository.save(user);
	}
	
	public List<Permissao> addCommonUserPermissions(){
		List<Permissao> permissions = new ArrayList<>();
		permissions.add(permissaoRepository.findById(1L).get());
		permissions.add(permissaoRepository.findById(3L).get());
		permissions.add(permissaoRepository.findById(4L).get());
		permissions.add(permissaoRepository.findById(5L).get());
		permissions.add(permissaoRepository.findById(6L).get());
		permissions.add(permissaoRepository.findById(7L).get());
		permissions.add(permissaoRepository.findById(8L).get());
		permissions.add(permissaoRepository.findById(9L).get());
		permissions.add(permissaoRepository.findById(10L).get());
		permissions.add(permissaoRepository.findById(11L).get());
		return permissions;
	}
	
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
