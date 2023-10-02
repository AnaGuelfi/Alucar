package br.ifsp.edu.prss6.alucar.domain.model;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.fasterxml.jackson.annotation.JsonFormat;

@Embeddable
public class TermoConsentimento {
	@Column(name="mensagem_consentimento")
	private String mensagem;
	@Column(name="valor_multa")
	private Double valorMulta;
	@Column(name="assinatura_locatario")
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate assinaturaLocatario;
	
	public String getMensagem() {
		return mensagem;
	}
	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	public Double getValorMulta() {
		return valorMulta;
	}
	public void setValorMulta(Double valorMulta) {
		this.valorMulta = valorMulta;
	}
	public LocalDate getAssinaturaLocatario() {
		return assinaturaLocatario;
	}
	public void setAssinaturaLocatario(LocalDate assinaturaLocatario) {
		this.assinaturaLocatario = assinaturaLocatario;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(assinaturaLocatario, mensagem, valorMulta);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TermoConsentimento other = (TermoConsentimento) obj;
		return Objects.equals(assinaturaLocatario, other.assinaturaLocatario)
				&& Objects.equals(mensagem, other.mensagem)
				&& Double.doubleToLongBits(valorMulta) == Double.doubleToLongBits(other.valorMulta);
	}
}
