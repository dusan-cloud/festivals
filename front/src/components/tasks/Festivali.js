import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AppAxios from "../../apis/AppAxios";


function Festivali() {
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


  return (
    <div>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Festivali;
