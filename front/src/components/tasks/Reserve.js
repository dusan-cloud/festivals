import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import AppAxios from "../../apis/AppAxios";

const Reserve = (props) => {
  const [festival, setFestival] = useState({});
  const [brojKarata, setBrojKarata] = useState(0);

  useEffect(() => {
    getFestivalById(props.match.params.id);
  }, [props.match.params.id]);

  const getFestivalById = async (id) => {
    try {
      const res = await AppAxios.get("/festivali/" + id);
      console.log(res);
      setFestival(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const rezervisi = async () => {
    let rezervacijaDTO = {
      festivalDTO: festival,
      brojKupljenihKarata: brojKarata,
    };

    try {
      const res = await AppAxios.post("/rezervacije", rezervacijaDTO);
      console.log(res);
      alert("Uspesno ste rezervisali kartu.");
      props.history.push("/festivali");
    } catch (err) {
      console.log(err);
      alert("Nema dovoljan broj karata.");
    }
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Broj karata</Form.Label>
          <Form.Control
            type="number"
            min="0"
            name="brojKarata"
            placeholder="Broj karata"
            onChange={(e) => setBrojKarata(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button onClick={() => rezervisi()}>Rezervisi</Button>
      </Form>
    </div>
  );
};

export default Reserve;
