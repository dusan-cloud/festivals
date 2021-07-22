import { useState } from "react";
import { Form, Collapse } from "react-bootstrap";
import AppAxios from "../../apis/AppAxios";

const SearchForm = () => {
  const [mesta, setMesta] = useState([]);
  const [showSearchForm, setSearchForm] = useState(false);
  const [naziv, setNaziv] = useState("");
  const [mestoId, setMestoId] = useState(-1);

  const getMesta = async () => {
    try {
      const res = await AppAxios.get("/mesta");
      console.log(res);
      setMesta(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const searchMesto = (e) => {
    const value = e.target.value;
    console.log(value);
    setMestoId(value);

    // getFestivals(0);
  };

  const searchNaziv = (e) => {
    const value = e.target.value;
    console.log(value);
    setNaziv(value);

    // getFestivals(0);
  };

  return (
    <div>
      <Form.Group>
        <Form.Check
          type="checkbox"
          label="Show search form"
          onClick={(event) => setSearchForm(event.target.checked)}
        />
      </Form.Group>
      <Collapse in={showSearchForm}>
        <Form>
          <Form.Group>
            <Form.Label>Mesto odrzavanja</Form.Label>
            <Form.Control
              id="mestoId"
              as="select"
              name="mestoId"
              onChange={searchMesto}
            >
              <option value={-1}>Mesto odrzavanja</option>
              {mesta.map((mesto) => {
                return (
                  <option key={mesto.id} value={mesto.id}>
                    {mesto.grad},({mesto.drzava})
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Naziv festivala</Form.Label>
            <Form.Control
              id="naziv"
              name="naziv"
              placeholder="Naziv festivala"
              onChange={searchNaziv}
            ></Form.Control>
          </Form.Group>
        </Form>
      </Collapse>
    </div>
  );
};

export default SearchForm;
