import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import AppAxios from "../../apis/AppAxios";

function Create(props) {
//   const [festival, setFestival] = useState({
//     naziv: "",
//     datumPocetka: "",
//     datumZavrsetka: "",
//     cenaKarte: 0,
//     brojDostupnihKarata: 0,
//     mestoDTO: null,
//   });
const[naziv, setNaziv] = useState('');
const[datumPocetka, setDatumPocetka] = useState('');
const[datumZavrsetka, setDatumZavrsetka] = useState('');
const[cenaKarte, setCenaKarte] = useState(0);
const[brojDostupnihKarata, setBrojDostupnihKarata] = useState(0);
const[mestoDTO, setMestoDTO] = useState({});

  const [mesta, setMesta] = useState([]);

  useEffect(() => {
    getMesta();
  }, []);

  const getMesta = () => {
    AppAxios.get("/mesta")
      .then((res) => {
        console.log(res);
        setMesta(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Ne valja nesto getMesta...");
      });
  };

  

  const selectionChanged = (e) => {
    const value = e.target.value;
    let mestoDTO = mesta.find((mesta) => mesta.id == value);

    console.log(value);
    console.log(mestoDTO);

    setMestoDTO(mestoDTO);
  };

  const create = () => {

    const festivalDTO = {
      naziv:naziv,
      datumPocetka: datumPocetka,
      datumZavrsetka: datumZavrsetka,
      cenaKarte: cenaKarte,
      brojDostupnihKarata: brojDostupnihKarata,
      mestoDTO: mestoDTO,
    };


    console.log(festivalDTO);

    AppAxios.post("/festivali", festivalDTO)
      .then((res) => {
        console.log(res.data);
        alert("Uspesno ste dodali festival.");
        props.history.push("/festivali");
      })
      .catch((err) => {
        console.log(err);
        alert("Podaci nisu validno uneseni. Probajte ponovo.");
      });
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form>
            <h1>Kreiraj takmicenje</h1>
            <Form.Group>
              <Form.Label>Naziv festivala</Form.Label>
              <Form.Control
                id="naziv"
                name="naziv"
                placeholder="Naziv festivala"
                onChange={(e) => setNaziv(e.target.value)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Datum pocetka festivala</Form.Label>
              <Form.Control
                id="datumPocetka"
                name="datumPocetka"
                placeholder="yyyy-mm-dd"
                onChange={(e) => setDatumPocetka(e.target.value)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Datum zavrsetka festivala</Form.Label>
              <Form.Control
                id="datumZavrsetka"
                name="datumZavrsetka"
                placeholder="yyyy-mm-dd"
                onChange={(e) => setDatumZavrsetka(e.target.value)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Cena karte</Form.Label>
              <Form.Control
                id="cenaKarte"
                type="number"
                min="0"
                name="cenaKarte"
                placeholder="Cena karte"
                onChange={(e) => setCenaKarte(e.target.value)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Broj dostupnih karata</Form.Label>
              <Form.Control
                id="brojDostupnihKarata"
                type="number"
                min="0"
                name="brojDostupnihKarata"
                placeholder="Broj dostupnih karata"
                onChange={(e) => setBrojDostupnihKarata(e.target.value)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Mesto odrzavanja</Form.Label>

              <Form.Control
                id="mestoDTO"
                as="select"
                name="mestoDTO"
                onChange={(e) => selectionChanged(e)}
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
