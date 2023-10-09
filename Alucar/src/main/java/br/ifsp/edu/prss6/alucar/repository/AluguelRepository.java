package br.ifsp.edu.prss6.alucar.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifsp.edu.prss6.alucar.domain.model.Aluguel;
import br.ifsp.edu.prss6.alucar.domain.model.Usuario;

public interface AluguelRepository extends JpaRepository<Aluguel, Long>{
	public List<Aluguel> findByLocador(Usuario usuario);
	public List<Aluguel> findByLocatario(Usuario usuario);
}
