import { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import AppAxios from "../../apis/AppAxios";

 const Create = (props) => {
  const [festival, setFestival] = useState({
    naziv: "",
    datumPocetka: "",
    datumZavrsetka: "",
    cenaKarte: 0,
    brojDostupnihKarata: 0,
    mestoDTO: null
  });
  const [mesta, setMesta] = useState([]);

 

  const getMesta = () => {
      AppAxios.get('/mesta')
        .then(res => {
            console.log(res)
            setMesta(res.data)
        })
        .catch(err => {
            console.log(err)
        })
  }

  const valueInputChanged = (e) => {
      const value = e.target.value;
      const name = e.target.name;

      festival[name] = value;

      setFestival(festival);
  }

  const selectionChanged = (e) => {
      let mestoDTO = mesta.find(mesto => mesto.id == e.target.value)
      festival.mestoDTO = mestoDTO;
      setFestival(festival);
  }


  return (
    <div>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <h1>Kreiraj takmicenje</h1>
            <Form.Group>
              <Form.Label>Naziv festivala</Form.Label>
              <Form.Control
                value={festival.naziv}
                name="naziv"
                placeholder="Naziv festivala"
                onChange={valueInputChanged}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Datum pocetka festivala</Form.Label>
              <Form.Control
                value={festival.datumPocetka}
                name="datumPocetka"
                placeholder="yyyy-mm-dd"
                onChange={valueInputChanged}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Datum zavrsetka festivala</Form.Label>
              <Form.Control
                value={festival.datumZavrsetka}
                name="datumZavrsetka"
                placeholder="yyyy-mm-dd"
                onChange={valueInputChanged}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Cena karte</Form.Label>
              <Form.Control
                value={festival.cenaKarte}
                type="number"
                min="0"
                name="cenaKarte"
                placeholder="Cena karte"
                onChange={valueInputChanged}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Broj dostupnih karata</Form.Label>
              <Form.Control
                value={festival.brojDostupnihKarata}
                type="number"
                min="0"
                name="brojDostupnihKarata"
                placeholder="Broj dostupnih karata"
                onChange={valueInputChanged}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Mesto odrzavanja</Form.Label>

              <Form.Control
                as="select"
                name="mestoDTO"
                onChange={selectionChanged}
              >
                <option></option>
                {mesta.map((mesto) => {
                  return (
                    <option key={mesto.id} value={mesto.id}>
                      {mesto.grad},({mesto.drzava})
                    </option>
                  );
                })}
              </Form.Control>
              <br />
            </Form.Group>

            <Button onClick={() => this.create()}> Kreiraj</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Create;