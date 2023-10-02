package br.ifsp.edu.prss6.alucar.domain.model;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class TermoComprometimento {
	@Column(name="mensagem_comprometimento")
	private String mensagem;
	@Column(name="assinatura_locador")
	private LocalDate assinaturaLocador;
	private static String texto = "Termo de Comprometimento";
	
	public String getMensagem() {
		return mensagem;
	}
	public void setMensagem(String mensagem) {
		this.mensagem = texto;
	}
	public LocalDate getAssinaturaLocador() {
		return assinaturaLocador;
	}
	public void setAssinaturaLocador(LocalDate assinaturaLocador) {
		this.assinaturaLocador = assinaturaLocador;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(assinaturaLocador, mensagem);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TermoComprometimento other = (TermoComprometimento) obj;
		return Objects.equals(assinaturaLocador, other.assinaturaLocador) && Objects.equals(mensagem, other.mensagem);
	}
}
