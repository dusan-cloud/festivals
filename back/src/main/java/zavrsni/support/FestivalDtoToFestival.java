package zavrsni.support;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import zavrsni.model.Festival;
import zavrsni.service.FestivalService;
import zavrsni.service.MestoService;
import zavrsni.web.dto.FestivalDTO;

@Component
public class FestivalDtoToFestival implements Converter<FestivalDTO, Festival> {

	@Autowired
	private FestivalService festivalService;
	
	@Autowired
	private MestoService mestoService;
	
	@Override
	public Festival convert(FestivalDTO dto) {
		Festival festival;
		
		if(dto.getId() == null) {
			festival = new Festival();
		} else {
			festival = festivalService.findOne(dto.getId());
		}
		
		if(festival != null) {
			festival.setNaziv(dto.getNaziv());
			festival.setDatumPocetka(getLocalDate(dto.getDatumPocetka()));
			festival.setDatumZavrsetka(getLocalDate(dto.getDatumZavrsetka()));
			festival.setCenaKarte(dto.getCenaKarte());
			festival.setBrojDostupnihKarata(dto.getBrojDostupnihKarata());
			festival.setMesto(mestoService.findOne(dto.getMestoDTO().getId()));
		}
		return festival;
	}

	private LocalDate getLocalDate(String datumFestival) throws DateTimeParseException {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate datum = LocalDate.parse(datumFestival, formatter);
        return datum;
    }
}
