package zavrsni.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import zavrsni.model.Festival;

@Repository
public interface FestivalRepository extends JpaRepository<Festival, Long>{

	Festival findOneById(Long id);

}
