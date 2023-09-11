package br.ifsp.edu.prss6.alucar.domain.model;

import java.time.LocalDate;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotNull;

@Embeddable
public class CNH {
	@Column(name="numero_registro")
	private String numeroRegistro;
	@Column(name="data_validade")
	private LocalDate dataValidade;
	private String categoria;
	
	public String getNumeroRegistro() {
		return numeroRegistro;
	}
	public void setNumeroRegistro(String numeroRegistro) {
		this.numeroRegistro = numeroRegistro;
	}
	public LocalDate getDataValidade() {
		return dataValidade;
	}
	public void setDataValidade(LocalDate dataValidade) {
		this.dataValidade = dataValidade;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(categoria, dataValidade, numeroRegistro);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CNH other = (CNH) obj;
		return Objects.equals(categoria, other.categoria) && Objects.equals(dataValidade, other.dataValidade)
				&& Objects.equals(numeroRegistro, other.numeroRegistro);
	}
}
