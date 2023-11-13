package br.ifsp.edu.prss6.alucar.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.ifsp.edu.prss6.alucar.domain.model.Endereco;
import br.ifsp.edu.prss6.alucar.repository.EnderecoRepository;


@Service
public class EnderecoService {
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	
	public Endereco update (Long id, Endereco usuario) {
		Endereco enderecoSaved = findEnderecoById(id);
		BeanUtils.copyProperties(usuario, enderecoSaved, "id");
		return enderecoRepository.save(enderecoSaved);
	}
	
	public Endereco findEnderecoById(Long id) {
		Endereco enderecoSaved = enderecoRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return enderecoSaved;		
	}
}
