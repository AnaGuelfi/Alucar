package br.ifsp.edu.prss6.alucar.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifsp.edu.prss6.alucar.domain.model.Imagem;

public interface ImagemRepository extends JpaRepository<Imagem, Long> {
	Optional<Imagem> findByName(String name);
}