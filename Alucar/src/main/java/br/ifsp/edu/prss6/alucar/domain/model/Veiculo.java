package br.ifsp.edu.prss6.alucar.domain.model;

import java.util.Objects;

public class Veiculo {
	private String marca;
	private String modelo;
	private String cor;
	private String placa;
	private Combustivel combustivel;
	private Opcionais opcionais;
	private double quilometragem;
	private CRLV crlv;
	private Imagens imagens;
	private Usuario usuario;
	
	public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public String getModelo() {
		return modelo;
	}
	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	public String getCor() {
		return cor;
	}
	public void setCor(String cor) {
		this.cor = cor;
	}
	public String getPlaca() {
		return placa;
	}
	public void setPlaca(String placa) {
		this.placa = placa;
	}
	public Combustivel getCombustivel() {
		return combustivel;
	}
	public void setCombustivel(Combustivel combustivel) {
		this.combustivel = combustivel;
	}
	public Opcionais getOpcionais() {
		return opcionais;
	}
	public void setOpcionais(Opcionais opcionais) {
		this.opcionais = opcionais;
	}
	public double getQuilometragem() {
		return quilometragem;
	}
	public void setQuilometragem(double quilometragem) {
		this.quilometragem = quilometragem;
	}
	public CRLV getCrlv() {
		return crlv;
	}
	public void setCrlv(CRLV crlv) {
		this.crlv = crlv;
	}
	public Imagens getImagens() {
		return imagens;
	}
	public void setImagens(Imagens imagens) {
		this.imagens = imagens;
	}
	
	@Override
	public int hashCode() {
		return Objects.hash(combustivel, cor, crlv, imagens, marca, modelo, opcionais, placa, quilometragem, usuario);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Veiculo other = (Veiculo) obj;
		return combustivel == other.combustivel && Objects.equals(cor, other.cor) && Objects.equals(crlv, other.crlv)
				&& Objects.equals(imagens, other.imagens) && Objects.equals(marca, other.marca)
				&& Objects.equals(modelo, other.modelo) && opcionais == other.opcionais
				&& Objects.equals(placa, other.placa)
				&& Double.doubleToLongBits(quilometragem) == Double.doubleToLongBits(other.quilometragem)
				&& Objects.equals(usuario, other.usuario);
	}
}
