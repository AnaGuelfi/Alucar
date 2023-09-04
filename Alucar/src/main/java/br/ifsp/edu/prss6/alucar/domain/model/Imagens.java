package br.ifsp.edu.prss6.alucar.domain.model;

import java.sql.Blob;

public class Imagens {
	private Blob frontal;
	private Blob lateral;
	private Blob traseira;
	private Blob interior;
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
