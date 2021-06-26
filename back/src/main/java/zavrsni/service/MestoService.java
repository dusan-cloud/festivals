package zavrsni.service;

import java.util.List;

import zavrsni.model.Mesto;

public interface MestoService {

	Mesto findOne(Long id);

	List<Mesto> findAll();

}
