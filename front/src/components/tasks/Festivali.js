import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AppAxios from "../../apis/AppAxios";
import { ButtonGroup, Button } from "react-bootstrap";

function Festivali() {
  const [festivals, setFestivals] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getFestivals();
  }, []);

  function getFestivals() {
    let config = {
      params: {
        pageNo: pageNo,
      },
    };
    AppAxios.get("/festivali")
      .then((res) => {
        console.log(res);
        setFestivals(res.data);
        // setPageNo(pageNo);
        // setTotalPages(res.headers["total-pages"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function changePage(direction) {
    const page = pageNo + direction;

    getFestivals(page);
  }

  return (
    <div>
      <ButtonGroup style={{ float: "right" }}>
        <Button variant="info" disabled={pageNo == 0} onClick={changePage(-1)}>
          Prethodna
        </Button>
        <Button
          variant="info"
          disabled={totalPages == pageNo + 1}
          onClick={changePage(1)}
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
