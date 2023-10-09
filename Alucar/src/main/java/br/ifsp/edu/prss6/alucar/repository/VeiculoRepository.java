package br.ifsp.edu.prss6.alucar.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifsp.edu.prss6.alucar.domain.model.Usuario;
import br.ifsp.edu.prss6.alucar.domain.model.Veiculo;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long>{
	public List<Veiculo> findByUsuario(Usuario usuario);
}
