package br.ifsp.edu.prss6.alucar.domain.model;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="ALUGUEL")
public class Aluguel {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	@NotNull
	private double valor;
	@NotNull
	@OneToOne
	@JoinColumn(name="local_retirada")
	private Endereco localRetirada;
	@NotNull
	@OneToOne
	@JoinColumn(name="local_entrega")
	private Endereco localEntrega;
	@NotNull
	@JsonFormat(pattern = "dd/MM/yyyy")
	@Column(name="data_retirada")
	private LocalDate dataRetirada;
	@NotNull
	@JsonFormat(pattern = "dd/MM/yyyy")
	@Column(name="data_entrega")
	private LocalDate dataEntrega;
	@NotNull
	private double periodo;
	@NotNull
	@ManyToOne
	@JoinColumn(name="locador")
	private Usuario locador;
	@NotNull
	@ManyToOne
	@JoinColumn(name="locatario")
	private Usuario locatario;
	@NotNull
	@ManyToOne
	@JoinColumn(name="veiculo")
	private Veiculo veiculo;
	@Embedded
	private TermoComprometimento termoComprometimento;
	@Embedded
	private TermoConsentimento termoConsentimento;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public double getValor() {
		return valor;
	}
	public void setValor(double valor) {
		this.valor = valor;
	}
	public Endereco getLocalRetirada() {
		return localRetirada;
	}
	public void setLocalRetirada(Endereco localRetirada) {
		this.localRetirada = localRetirada;
	}
	public Endereco getLocalEntrega() {
		return localEntrega;
	}
	public void setLocalEntrega(Endereco localEntrega) {
		this.localEntrega = localEntrega;
	}
	public LocalDate getDataRetirada() {
		return dataRetirada;
	}
	public void setDataRetirada(LocalDate dataRetirada) {
		this.dataRetirada = dataRetirada;
	}
	public LocalDate getDataEntrega() {
		return dataEntrega;
	}
	public void setDataEntrega(LocalDate dataEntrega) {
		this.dataEntrega = dataEntrega;
	}
	public double getPeriodo() {
		return periodo;
	}
	public void setPeriodo(double periodo) {
		this.periodo = periodo;
	}
	public Usuario getLocador() {
		return locador;
	}
	public void setLocador(Usuario locador) {
		this.locador = locador;
	}
	public Usuario getLocatario() {
		return locatario;
	}
	public void setLocatario(Usuario locatario) {
		this.locatario = locatario;
	}
	public Veiculo getVeiculo() {
		return veiculo;
	}
	public void setVeiculo(Veiculo veiculo) {
		this.veiculo = veiculo;
	}
	public TermoComprometimento getTermoComprometimento() {
		return termoComprometimento;
	}
	public void setTermoComprometimento(TermoComprometimento termoComprometimento) {
		this.termoComprometimento = termoComprometimento;
	}
	public TermoConsentimento getTermoConsentimento() {
		return termoConsentimento;
	}
	public void setTermoConsentimento(TermoConsentimento termoConsentimento) {
		this.termoConsentimento = termoConsentimento;
	}
	@Override
	public int hashCode() {
		return Objects.hash(dataEntrega, dataRetirada, id, locador, localEntrega, localRetirada, locatario, periodo,
				termoComprometimento, termoConsentimento, valor, veiculo);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Aluguel other = (Aluguel) obj;
		return Objects.equals(dataEntrega, other.dataEntrega) && Objects.equals(dataRetirada, other.dataRetirada)
				&& Objects.equals(id, other.id) && Objects.equals(locador, other.locador)
				&& Objects.equals(localEntrega, other.localEntrega)
				&& Objects.equals(localRetirada, other.localRetirada) && Objects.equals(locatario, other.locatario)
				&& Double.doubleToLongBits(periodo) == Double.doubleToLongBits(other.periodo)
				&& Objects.equals(termoComprometimento, other.termoComprometimento)
				&& Objects.equals(termoConsentimento, other.termoConsentimento)
				&& Double.doubleToLongBits(valor) == Double.doubleToLongBits(other.valor)
				&& Objects.equals(veiculo, other.veiculo);
	}
}
