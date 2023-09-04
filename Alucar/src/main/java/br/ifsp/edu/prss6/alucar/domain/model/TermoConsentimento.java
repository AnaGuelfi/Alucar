package br.ifsp.edu.prss6.alucar.domain.model;

import java.time.LocalDate;
import java.util.Objects;

public class TermoConsentimento {
	private String mensagem;
	private double valorMulta;
	private LocalDate assinaturaLocatario;
	
	public String getMensagem() {
		return mensagem;
	}
	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	public double getValorMulta() {
		return valorMulta;
	}
	public void setValorMulta(double valorMulta) {
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
