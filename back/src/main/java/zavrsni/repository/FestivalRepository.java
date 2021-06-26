package zavrsni.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import zavrsni.model.Festival;

@Repository
public interface FestivalRepository extends JpaRepository<Festival, Long>{

	Festival findOneById(Long id);

	Page<Festival> findByNazivIgnoreCaseContains(String naziv, Pageable pageable);

	Page<Festival> findByNazivIgnoreCaseContainsAndMestoId(String naziv, Long mestoId, Pageable pageable);

}
