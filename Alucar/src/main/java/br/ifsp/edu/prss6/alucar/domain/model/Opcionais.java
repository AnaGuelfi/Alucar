package br.ifsp.edu.prss6.alucar.domain.model;

public enum Opcionais {
	AR_CONDICIONADO("Ar-Condicionado"),
	QUATRO_PORTAS("Quatro Portas"),
	TRIO_ELETRICO("Vidro elétrico, travas elétricas e alarme"),
	RADIO_GPS("Rádio e/ou GPS");
	
	private String description;
	
	private Opcionais(String descrip) {
		this.description = descrip;
	}
	
	public String getDescription() {
		return description;
	}
}
