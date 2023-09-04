package br.ifsp.edu.prss6.alucar.domain.model;

import java.time.LocalDate;
import java.util.Objects;

public class CRLV {
	private String renavam;
	private String cidadeEmissao;
	private String estadoEmissao;
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
