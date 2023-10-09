package br.ifsp.edu.prss6.alucar.domain.model;

public enum StatusAluguel {
	CRIADO("Criado"),
	PENDENTE("Pendente"), // Faltam as assinaturas dos termos 
	ATIVO("Ativo"), // O aluguel está dentro do período acordado
	CANCELADO("Cancelado"), // O aluguel foi cancelado
	ATRASADO("Atrasado"), // O aluguel está em período de multa por não ter sido feita a devolução no prazo
	CONCLUIDO("Concluído"); // O aluguel foi finalizado, com o consentimento do locador e locatário
	
	private String description;
	
	private StatusAluguel(String descrip) {
		this.description = descrip;
	}
	
	public String getDescription() {
		return description;
	}
}
