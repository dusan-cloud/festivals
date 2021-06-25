package zavrsni.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import zavrsni.model.Mesto;

@Repository
public interface MestoRepository extends JpaRepository<Mesto, Long>{

	Mesto findOneById(Long id);

}
