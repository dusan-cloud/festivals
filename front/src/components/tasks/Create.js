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
    mestoDTO: null,
  });

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

  const valueInputChanged = (e) => {

    const value = e.target.value;
    const name = e.target.name;

    console.log(value)
    console.log(name);
    const fest = {...festival};
    fest[name] = value;

    setFestival(fest);
  };

  const selectionChanged = (e) => {
      const value = e.target.value;
      let mestoDTO = mesta.find(mesta => mesta.id == value);

      console.log(value);
      console.log(mestoDTO);

      setFestival({mestoDTO: mestoDTO});
  };

  const create = () => {
     let festivalDTO = {
        naziv: festival.naziv,
        datumPocetka: festival.datumPocetka,
        datumZavrsetka: festival.datumZavrsetka,
        cenaKarte: festival.cenaKarte,
        brojDostupnihKarata: festival.brojDostupnihKarata,
        mestoDTO: festival.mestoDTO
     }
     AppAxios.post('/festivali', festivalDTO)
        .then(res => {
            console.log(res)
            alert('Uspesno ste dodali festival.')
            props.history.push('/festivali')
        })
        .catch(err => {
            console.log(err)
            alert('Podaci nisu validno uneseni. Probajte ponovo.')
        })

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
                name="naziv"
                placeholder="Naziv festivala"
                onChange={(e) => valueInputChanged(e)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Datum pocetka festivala</Form.Label>
              <Form.Control
                name="datumPocetka"
                placeholder="yyyy-mm-dd"
                onChange={(e) => valueInputChanged(e)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Datum zavrsetka festivala</Form.Label>
              <Form.Control
                name="datumZavrsetka"
                placeholder="yyyy-mm-dd"
                onChange={(e) => valueInputChanged(e)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Cena karte</Form.Label>
              <Form.Control
                type="number"
                min="0"
                name="cenaKarte"
                placeholder="Cena karte"
                onChange={(e) => valueInputChanged(e)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Broj dostupnih karata</Form.Label>
              <Form.Control
                type="number"
                min="0"
                name="brojDostupnihKarata"
                placeholder="Broj dostupnih karata"
                onChange={(e) => valueInputChanged(e)}
              />
              <br />
            </Form.Group>

            <Form.Group>
              <Form.Label>Mesto odrzavanja</Form.Label>

              <Form.Control
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

            <Button onClick={create}> Kreiraj</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Create;
