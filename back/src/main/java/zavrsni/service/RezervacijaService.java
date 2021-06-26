package zavrsni.service;

import java.util.List;

import zavrsni.model.Rezervacija;

public interface RezervacijaService {

	Rezervacija findOne(Long id);

	List<Rezervacija> findAll();

	Rezervacija save(Rezervacija rezervacija);

}
