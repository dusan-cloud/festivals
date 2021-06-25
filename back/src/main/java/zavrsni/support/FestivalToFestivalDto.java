package zavrsni.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import zavrsni.model.Festival;
import zavrsni.web.dto.FestivalDTO;

@Component
public class FestivalToFestivalDto implements Converter<Festival, FestivalDTO>{

	@Autowired
	private MestoToMestoDto toMestoDto;
	
	@Override
	public FestivalDTO convert(Festival fest) {
		FestivalDTO festivalDTO = new FestivalDTO();
		festivalDTO.setId(fest.getId());
		festivalDTO.setNaziv(fest.getNaziv());
		festivalDTO.setCenaKarte(fest.getCenaKarte());
		festivalDTO.setBrojDostupnihKarata(fest.getBrojDostupnihKarata());
		festivalDTO.setDatumPocetka(fest.getDatumPocetka().toString());
		festivalDTO.setDatumZavrsetka(fest.getDatumZavrsetka().toString());
		festivalDTO.setMestoDTO(toMestoDto.convert(fest.getMesto()));
		
		return festivalDTO;
	}
	
	public List<FestivalDTO> convert(List<Festival> festivali) {
		List<FestivalDTO> festivalDTO = new ArrayList<>();
		
		for (Festival festival : festivali) {
			festivalDTO.add(convert(festival));
		}
		
		return festivalDTO;
	}
	
}
