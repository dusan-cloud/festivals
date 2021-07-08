package zavrsni.web.dto;

import javax.validation.constraints.Positive;

public class RezervacijaDTO {

	@Positive(message = "Id mora biti pozitivan broj.")
	private Long id;
	
	@Positive
	private int brojKupljenihKarata;
	
	private double ukupnaCena;
	
	private FestivalDTO festivalDTO;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getBrojKupljenihKarata() {
		return brojKupljenihKarata;
	}

	public void setBrojKupljenihKarata(int brojKupljenihKarata) {
		this.brojKupljenihKarata = brojKupljenihKarata;
	}

	public double getUkupnaCena() {
		return ukupnaCena;
	}

	public void setUkupnaCena(double ukupnaCena) {
		this.ukupnaCena = ukupnaCena;
	}

	public FestivalDTO getFestivalDTO() {
		return festivalDTO;
	}

	public void setFestivalDTO(FestivalDTO festivalDTO) {
		this.festivalDTO = festivalDTO;
	}
}
