package br.ifsp.edu.prss6.alucar.domain.model;

import java.util.Objects;

public class Usuario {
	private String nome;
	private String cpf;
	private Endereco endereco;
	private String telefone;
	private String senha;
	private CNH cnh;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public Endereco getEndereco() {
		return endereco;
	}
	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public CNH getCnh() {
		return cnh;
	}
	public void setCnh(CNH cnh) {
		this.cnh = cnh;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(cnh, cpf, endereco, nome, senha, telefone);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		return Objects.equals(cnh, other.cnh) && Objects.equals(cpf, other.cpf)
				&& Objects.equals(endereco, other.endereco) && Objects.equals(nome, other.nome)
				&& Objects.equals(senha, other.senha) && Objects.equals(telefone, other.telefone);
	}
}
