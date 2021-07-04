import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import AppAxios from "../../apis/AppAxios";

function Create(props) {
  const [festival, setFestival] = useState({
    naziv: "",
    datumPocetka: "",
    datumZavrsetka: "",
    cenaKarte: 0,
    brojDostupnihKarata: 0,
    mestoDTO: null
  });

  const [mesta, setMesta] = useState([]);

  useEffect(() => {
    getMesta();
  }, [])

  const getMesta = () => {
      AppAxios.get('/mesta')
        .then(res => {
            console.log(res)
            setMesta(res.data)
        })
        .catch(err => {
            console.log(err)
            alert('Ne valja nesto getMesta...')
        })
  }

 function selectionChanged(e) {

  }

  function create() {
      
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
                onChange={(e) => this.valueInputChanged(e)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Datum pocetka festivala</Form.Label>
              <Form.Control
                value={festival.datumPocetka}
                name="datumPocetka"
                placeholder="yyyy-mm-dd"
                onChange={(e) => this.valueInputChanged(e)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Datum zavrsetka festivala</Form.Label>
              <Form.Control
                value={festival.datumZavrsetka}
                name="datumZavrsetka"
                placeholder="yyyy-mm-dd"
                onChange={(e) => this.valueInputChanged(e)}
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
                onChange={(e) => this.valueInputChanged(e)}
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
                onChange={(e) => this.valueInputChanged(e)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Mesto odrzavanja</Form.Label>

              <Form.Control
                as="select"
                name="mestoDTO"
               onChange={(event) => selectionChanged(event)}
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

            <Button onClick={() => create()}> Kreiraj</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Create;
