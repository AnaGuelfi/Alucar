package br.ifsp.edu.prss6.alucar.domain.model;

import java.sql.Blob;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class Imagens {
	@Column(name="imagem_frontal")
	private Blob frontal;
	@Column(name="imagem_lateral")
	private Blob lateral;
	@Column(name="imagem_traseira")
	private Blob traseira;
	@Column(name="imagem_interior")
	private Blob interior;
	@Column(name="imagem_pneus")
	private Blob pneus;
	
	public Blob getFrontal() {
		return frontal;
	}
	public void setFrontal(Blob frontal) {
		this.frontal = frontal;
	}
	public Blob getLateral() {
		return lateral;
	}
	public void setLateral(Blob lateral) {
		this.lateral = lateral;
	}
	public Blob getTraseira() {
		return traseira;
	}
	public void setTraseira(Blob traseira) {
		this.traseira = traseira;
	}
	public Blob getInterior() {
		return interior;
	}
	public void setInterior(Blob interior) {
		this.interior = interior;
	}
	public Blob getPneus() {
		return pneus;
	}
	public void setPneus(Blob pneus) {
		this.pneus = pneus;
	}
}
