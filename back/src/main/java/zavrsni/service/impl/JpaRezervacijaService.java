package zavrsni.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import zavrsni.model.Festival;
import zavrsni.model.Rezervacija;
import zavrsni.repository.RezervacijaRepository;
import zavrsni.service.FestivalService;
import zavrsni.service.RezervacijaService;

@Service
public class JpaRezervacijaService implements RezervacijaService {

	@Autowired
	private RezervacijaRepository rezervacijaRepository;
	
	@Autowired
	private FestivalService festivalService;
	
	@Override
	public Rezervacija findOne(Long id) {
		// TODO Auto-generated method stub
		return rezervacijaRepository.findOneById(id);
	}

	@Override
	public List<Rezervacija> findAll() {
		// TODO Auto-generated method stub
		return rezervacijaRepository.findAll();
	}

	@Override
	public Rezervacija save(Rezervacija rezervacija) {
		Festival festival = rezervacija.getFestival();
		int brDostupnih = festival.getBrojDostupnihKarata() - rezervacija.getBrojKupljenihKarata();
		festival.setBrojDostupnihKarata(brDostupnih);
		festival.getRezervacije().add(rezervacija);
		festivalService.save(festival);
		
		double ukupnaCena = rezervacija.getBrojKupljenihKarata() * festival.getCenaKarte();
		rezervacija.setUkupnaCena(ukupnaCena);
		
		
		return rezervacijaRepository.save(rezervacija);
	}
	
	

}
