package zavrsni.web.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import zavrsni.model.Rezervacija;
import zavrsni.service.RezervacijaService;
import zavrsni.support.RezervacijaDtoToRezervacija;
import zavrsni.support.RezervacijaToRezervacijaDto;
import zavrsni.web.dto.RezervacijaDTO;

@RestController
@RequestMapping(value = "/api/rezervacije", produces = MediaType.APPLICATION_JSON_VALUE)
public class RezervacijaController {

	@Autowired
	private RezervacijaService rezervacijaService;
	
	@Autowired
	private RezervacijaDtoToRezervacija toRezervacija;
	
	@Autowired
	private RezervacijaToRezervacijaDto toRezervacijaDto;
	
	
	
	@PreAuthorize("hasRole('KORISNIK')")
	@GetMapping
	public ResponseEntity<List<RezervacijaDTO>> getAll() {
		
		List<Rezervacija> rezervacija = rezervacijaService.findAll();
		
		return new ResponseEntity<>(toRezervacijaDto.convert(rezervacija), HttpStatus.OK);
	}
	
	
	@PreAuthorize("hasRole('KORISNIK')")
	 @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	    public ResponseEntity<RezervacijaDTO> create(@Valid @RequestBody RezervacijaDTO rezervacijaDTO){
		 Rezervacija rezervacija = toRezervacija.convert(rezervacijaDTO);

	        if(rezervacija.getFestival() == null) {
	            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	        }
	        
	        if(rezervacija.getBrojKupljenihKarata() > rezervacija.getFestival().getBrojDostupnihKarata()) {
	        	return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	        }
	        
	        Rezervacija sacuvanaRezervacija= rezervacijaService.save(rezervacija);

	        return new ResponseEntity<>(toRezervacijaDto.convert(sacuvanaRezervacija), HttpStatus.CREATED);
	    }
	
	
	
}
