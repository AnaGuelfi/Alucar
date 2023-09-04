package br.ifsp.edu.prss6.alucar.domain.model;

public enum Combustivel {
	ELETRICO("Elétrico"),
	ALCOOL("Álcool"),
	GASOLINA("Gasolina"),
	DIESEL("Diesel"),
	GNV("Gás Natural Veicular"),
	FLEX("Flex");
	
	private String description;
	
	private Combustivel(String descrip) {
		this.description = descrip;
	}
	
	public String getDescription() {
		return description;
	}	
}
