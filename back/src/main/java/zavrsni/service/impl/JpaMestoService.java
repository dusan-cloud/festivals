package zavrsni.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import zavrsni.model.Mesto;
import zavrsni.repository.MestoRepository;
import zavrsni.service.MestoService;

@Service
public class JpaMestoService implements MestoService {
	
	@Autowired
	private MestoRepository mestoRepository;

	@Override
	public Mesto findOne(Long id) {
		// TODO Auto-generated method stub
		return mestoRepository.findOneById(id);
	}


}
