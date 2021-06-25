package zavrsni.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import zavrsni.model.Rezervacija;
import zavrsni.repository.RezervacijaRepository;
import zavrsni.service.RezervacijaService;

@Service
public class JpaRezervacijaService implements RezervacijaService{

	@Autowired
	private RezervacijaRepository rezervacijaRepository;
	
	@Override
	public Rezervacija findOne(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
