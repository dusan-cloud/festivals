package zavrsni.service;

import org.springframework.data.domain.Page;

import zavrsni.model.Festival;

public interface FestivalService {

	Festival findOne(Long id);

	Festival delete(Long id);

	Page<Festival> findAll(Long mestoId, String naziv, int pageNo);

	Festival update(Festival festival);

	Festival save(Festival festival);


}
