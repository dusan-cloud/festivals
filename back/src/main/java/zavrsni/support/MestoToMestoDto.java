package zavrsni.support;

import java.util.ArrayList;
import java.util.List;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import zavrsni.model.Mesto;
import zavrsni.web.dto.MestoDTO;

@Component
public class MestoToMestoDto implements Converter<Mesto, MestoDTO>{

	
	
	@Override
	public MestoDTO convert(Mesto mesto) {
		MestoDTO mestoDTO = new MestoDTO();
		mestoDTO.setId(mesto.getId());
		mestoDTO.setGrad(mesto.getGrad());
		mestoDTO.setDrzava(mesto.getDrzava());
		
		return mestoDTO;
	}

	public List<MestoDTO> convert(List<Mesto> mesta) {
		List<MestoDTO> mestoDTO = new ArrayList<>();
		
		for (Mesto mesto : mesta) {
			mestoDTO.add(convert(mesto));
		}
		
		return mestoDTO;
	}
	
}
