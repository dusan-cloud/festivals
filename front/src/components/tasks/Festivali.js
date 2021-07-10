import React, { useEffect, useState } from "react";
import { Table, Button, ButtonGroup, Form } from "react-bootstrap";
import AppAxios from "../../apis/AppAxios";

const Festivali = (props) => {
  const [festivals, setFestivals] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [naziv, setNaziv] = useState("");
  const [mestoId, setMestoId] = useState(-1);
  const [mesta, setMesta] = useState([]);

  useEffect(() => {
    getFestivals(0);
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
      });
  };

  const getFestivals = (page) => {
    let config = {
      params: {
        pageNo: page,
      },
    };

    AppAxios.get("/festivali", config)
      .then((res) => {
        console.log(res);
        setFestivals(res.data);
        setPageNo(page);
        setTotalPages(res.headers["total-pages"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const remove = (id) => {
    console.log(id);

    AppAxios.delete("/festivali/" + id)
      .then((res) => {
        console.log(res);
        alert("Uspesno ste obrisali festival.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Something wrong with delete..");
      });
  };

  const goToCreate = () => {
    props.history.push("/festivali/create");
  };

  const changePage = (direction) => {
    const page = pageNo + direction;

    getFestivals(page);
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Mesto odrzavanja</Form.Label>
          <Form.Control
            value={mestoId}
            as="select"
            name="mestoId"
            onChange={(e) => set(e)}
          >
            <option placeholder="Mesto odrzavanja" value={-1}></option>
            {}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Naziv festivala</Form.Label>
          <Form.Control
            value={this.state.search.naziv}
            name="naziv"
            placeholder="Naziv festivala"
            onChange={(e) => setNaziv(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </Form>

      <Button variant="success" onClick={() => goToCreate()}>
        Kreiraj festival
      </Button>

      <ButtonGroup style={{ float: "right" }}>
        <Button
          variant="info"
          disabled={pageNo == 0}
          onClick={() => changePage(-1)}
        >
          Prethodna
        </Button>
        <Button
          variant="info"
          disabled={totalPages == pageNo + 1}
          onClick={() => changePage(1)}
        >
          Sledeca
        </Button>
      </ButtonGroup>

      <Table
        style={{ marginTop: 5 }}
        striped
        bordered
        hover
        size="sm"
        id="festivals-table"
      >
        <thead className="thead-dark">
          <tr>
            <th>Naziv festivala</th>
            <th>Mesto odrzavanja</th>
            <th>Datum pocetka festivala</th>
            <th>Datum zavrsetka festivala</th>
            <th>Cena karte (RSD)</th>
            <th>Broj preostalih karata</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {festivals.map((festival) => (
            <tr key={festival.id} value={festival.id}>
              <td>{festival.naziv}</td>
              <td>
                {festival.mestoDTO.grad}, ({festival.mestoDTO.drzava})
              </td>
              <td>{festival.datumPocetka}</td>
              <td>{festival.datumZavrsetka}</td>
              <td>{festival.cenaKarte}</td>
              <td>{festival.brojDostupnihKarata}</td>
              <td>
                <Button variant="danger" onClick={() => remove(festival.id)}>
                  Obrisi
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Festivali;
