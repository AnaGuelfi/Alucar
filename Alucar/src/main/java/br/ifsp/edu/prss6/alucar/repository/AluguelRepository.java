package br.ifsp.edu.prss6.alucar.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifsp.edu.prss6.alucar.domain.model.Aluguel;

public interface AluguelRepository extends JpaRepository<Aluguel, Long>{

}
