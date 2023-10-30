package br.ifsp.edu.prss6.alucar.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import br.ifsp.edu.prss6.alucar.domain.model.Usuario;

public class SystemUser extends org.springframework.security.core.userdetails.User{

	private static final long serialVersionUID = 1L;
	
	private Usuario user;

	public SystemUser(Usuario user, Collection<? extends GrantedAuthority> authorities) {
		super(user.getEmail(), user.getSenha(), authorities);
		this.user = user;
	}

	public Usuario getUser() {
		return user;
	}
}


