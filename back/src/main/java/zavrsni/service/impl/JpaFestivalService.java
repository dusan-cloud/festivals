package zavrsni.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import zavrsni.model.Festival;
import zavrsni.repository.FestivalRepository;
import zavrsni.service.FestivalService;

@Service
public class JpaFestivalService implements FestivalService{

	@Autowired
	private FestivalRepository festivalRepository;
	
	@Override
	public Festival findOne(Long id) {
		// TODO Auto-generated method stub
		return festivalRepository.findOneById(id);
	}

}
