package br.ifsp.edu.prss6.alucar.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.ifsp.edu.prss6.alucar.domain.model.Veiculo;
import br.ifsp.edu.prss6.alucar.repository.VeiculoRepository;

import org.springframework.dao.EmptyResultDataAccessException;

@Service
public class VeiculoService {
	
	@Autowired
	private VeiculoRepository veiculoRepository;
	
	public Veiculo update (Long id, Veiculo veiculo) {
		Veiculo veiculoSaved = findVeiculoById(id);
		BeanUtils.copyProperties(veiculo, veiculoSaved, "id");
		return veiculoRepository.save(veiculoSaved);
	}
	
	public Veiculo findVeiculoById(Long id) {
		Veiculo veiculoSaved = veiculoRepository.findById(id).orElseThrow(() -> new EmptyResultDataAccessException(1));
		return veiculoSaved;		
	}
}
