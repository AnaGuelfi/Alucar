package br.ifsp.edu.prss6.alucar.domain.model;

import java.time.LocalDate;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.UniqueConstraint;

@Embeddable
public class CRLV {
	@Column(unique=true)
	private String renavam;
	@Column(name="cidade_emissao")
	private String cidadeEmissao;
	@Column(name="estado_emissao")
	private String estadoEmissao;
	@Column(name="data_emissao")
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate dataEmissao;
	
	public String getRenavam() {
		return renavam;
	}
	public void setRenavam(String renavam) {
		this.renavam = renavam;
	}
	public String getCidadeEmissao() {
		return cidadeEmissao;
	}
	public void setCidadeEmissao(String cidadeEmissao) {
		this.cidadeEmissao = cidadeEmissao;
	}
	public String getEstadoEmissao() {
		return estadoEmissao;
	}
	public void setEstadoEmissao(String estadoEmissao) {
		this.estadoEmissao = estadoEmissao;
	}
	public LocalDate getDataEmissao() {
		return dataEmissao;
	}
	public void setDataEmissao(LocalDate dataEmissao) {
		this.dataEmissao = dataEmissao;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(cidadeEmissao, dataEmissao, estadoEmissao, renavam);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CRLV other = (CRLV) obj;
		return Objects.equals(cidadeEmissao, other.cidadeEmissao) && Objects.equals(dataEmissao, other.dataEmissao)
				&& Objects.equals(estadoEmissao, other.estadoEmissao) && Objects.equals(renavam, other.renavam);
	}
}
