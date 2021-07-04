import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import AppAxios from "../../apis/AppAxios";

function Festivali(props) {
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    getFestivals();
  }, []);

  function getFestivals() {
    AppAxios.get("/festivali")
      .then((res) => {
        console.log(res);
        setFestivals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function remove(id) {
    console.log(id)

    AppAxios.delete('/festivali/' + id)
      .then(res => {
        console.log(res)
        alert('Uspesno ste obrisali festival.')
        window.location.reload()
      })
      .catch(err => {
        console.log(err)
        alert('Something wrong with delete..')
      })
  }

  function goToCreate() {
    props.history.push('/festivali/create')
  }

  return (
    <div>
      <Button variant="success" onClick={() => goToCreate()}>
        Kreiraj festival
      </Button>

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
                <Button variant="danger" onClick={() => remove(festival.id)}>Obrisi</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Festivali;
