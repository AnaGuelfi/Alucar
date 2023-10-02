package br.ifsp.edu.prss6.alucar.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.ifsp.edu.prss6.alucar.domain.model.Aluguel;
import br.ifsp.edu.prss6.alucar.repository.AluguelRepository;

@Service
public class AluguelService {
	
	@Autowired
	private AluguelRepository aluguelRepository;
	
	public Aluguel update (Long id, Aluguel aluguel) {
		Aluguel aluguelSaved = findAluguelById(id);
		BeanUtils.copyProperties(aluguel, aluguelSaved, "id");
		return aluguelRepository.save(aluguelSaved);
	}
	
	public Aluguel findAluguelById(Long id) {
		Aluguel aluguelSaved = aluguelRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return aluguelSaved;		
	}

}
