package zavrsni.web.dto;

import javax.validation.constraints.Size;

public class MestoDTO {

	
	private Long id;

	private String grad;
	
	@Size(min=3, max=3)
	private String drzava;
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getGrad() {
		return grad;
	}

	public void setGrad(String grad) {
		this.grad = grad;
	}

	public String getDrzava() {
		return drzava;
	}

	public void setDrzava(String drzava) {
		this.drzava = drzava;
	}
}
