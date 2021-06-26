package zavrsni.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import zavrsni.model.Mesto;
import zavrsni.service.MestoService;
import zavrsni.support.MestoToMestoDto;
import zavrsni.web.dto.MestoDTO;

@RestController
@RequestMapping(value = "/api/mesta", produces = MediaType.APPLICATION_JSON_VALUE)
public class MestoController {

	@Autowired
	private MestoService mestoService;
	
	@Autowired
	private MestoToMestoDto toMestoDto;
	

	@GetMapping
	public ResponseEntity<List<MestoDTO>> getAll() {
		
		List<Mesto> mesto = mestoService.findAll();
		
		return new ResponseEntity<>(toMestoDto.convert(mesto), HttpStatus.OK);
	}
}
