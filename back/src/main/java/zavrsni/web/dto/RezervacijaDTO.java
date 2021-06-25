package zavrsni.web.dto;

public class RezervacijaDTO {

	
private Long id;
	
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
