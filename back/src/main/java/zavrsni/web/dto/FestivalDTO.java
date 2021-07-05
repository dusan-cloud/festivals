package zavrsni.web.dto;

import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

public class FestivalDTO {

	
	private Long id;
	
	@Size(max=50)
	private String naziv;

	private String datumPocetka;

	private String datumZavrsetka;

	
	private double cenaKarte;

	private int brojDostupnihKarata;
	
	private MestoDTO mestoDTO;
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public String getDatumPocetka() {
		return datumPocetka;
	}

	public void setDatumPocetka(String datumPocetka) {
		this.datumPocetka = datumPocetka;
	}

	public String getDatumZavrsetka() {
		return datumZavrsetka;
	}

	public void setDatumZavrsetka(String datumZavrsetka) {
		this.datumZavrsetka = datumZavrsetka;
	}

	public double getCenaKarte() {
		return cenaKarte;
	}

	public void setCenaKarte(double cenaKarte) {
		this.cenaKarte = cenaKarte;
	}

	public int getBrojDostupnihKarata() {
		return brojDostupnihKarata;
	}

	public void setBrojDostupnihKarata(int brojDostupnihKarata) {
		this.brojDostupnihKarata = brojDostupnihKarata;
	}

	public MestoDTO getMestoDTO() {
		return mestoDTO;
	}

	public void setMestoDTO(MestoDTO mestoDTO) {
		this.mestoDTO = mestoDTO;
	}
}
