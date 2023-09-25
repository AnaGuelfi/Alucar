package br.ifsp.edu.prss6.alucar.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifsp.edu.prss6.alucar.domain.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

	public Optional<Usuario> findByEmail(String email);
	
}
