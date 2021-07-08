package zavrsni.web.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;

public class FestivalDTO {

	@Positive(message = "Id mora biti pozitivan broj.")
	private Long id;

	@NotBlank(message = "Naziv festivala nije unesen.")
	private String naziv;

	@Pattern(regexp = "^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$", message = "Datum nije validan.")
	private String datumPocetka;

	@Pattern(regexp = "^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$", message = "Datum nije validan.")
	private String datumZavrsetka;

	@Positive
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
