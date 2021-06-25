package zavrsni.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import zavrsni.model.Rezervacija;
import zavrsni.web.dto.RezervacijaDTO;

@Component
public class RezervacijaToRezervacijaDto implements Converter<Rezervacija, RezervacijaDTO>{

	@Autowired
	private FestivalToFestivalDto toFestivalDto;
	
	@Override
	public RezervacijaDTO convert(Rezervacija rez) {
		RezervacijaDTO rezervacijaDTO = new RezervacijaDTO();
		rezervacijaDTO.setId(rez.getId());
		rezervacijaDTO.setBrojKupljenihKarata(rez.getBrojKupljenihKarata());
		rezervacijaDTO.setUkupnaCena(rez.getUkupnaCena());
		rezervacijaDTO.setFestivalDTO(toFestivalDto.convert(rez.getFestival()));
		
		return rezervacijaDTO;
	}

	public List<RezervacijaDTO> convert(List<Rezervacija> rezervacije) {
		List<RezervacijaDTO> rezervacijaDTO = new ArrayList<>();
		
		for (Rezervacija rezervacija : rezervacije) {
			rezervacijaDTO.add(convert(rezervacija));
		}
		
		return rezervacijaDTO;
	}
}
