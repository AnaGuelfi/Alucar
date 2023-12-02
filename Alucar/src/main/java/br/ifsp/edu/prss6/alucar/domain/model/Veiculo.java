package br.ifsp.edu.prss6.alucar.domain.model;

import java.util.ArrayList;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="VEICULO")
public class Veiculo {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@NotNull
	private String marca;
	@NotNull
	private String modelo;
	@NotNull
	private String cor;
	@NotNull
	@Column(unique=true)
	private String placa;
	@NotNull
	@Enumerated(EnumType.STRING)
	private Combustivel combustivel;
	private String opcionais;
	@Min(value=0)
	private double quilometragem;
	@Embedded
	private CRLV crlv;
	@NotNull
	@ManyToOne
	@JoinColumn(name="id_usuario")
	private Usuario usuario;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
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
	public String getOpcionais() {
		return opcionais;
	}
	public void setOpcionais(String opcionais) {
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
	@Override
	public int hashCode() {
		return Objects.hash(combustivel, cor, crlv, id, marca, modelo, opcionais, placa, quilometragem, usuario);
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
				&& Objects.equals(id, other.id) && Objects.equals(marca, other.marca)
				&& Objects.equals(modelo, other.modelo) && Objects.equals(opcionais, other.opcionais)
				&& Objects.equals(placa, other.placa)
				&& Double.doubleToLongBits(quilometragem) == Double.doubleToLongBits(other.quilometragem)
				&& Objects.equals(usuario, other.usuario);
	}
	
	
	
}