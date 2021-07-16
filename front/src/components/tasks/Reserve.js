import { useEffect, useState } from "react";
import AppAxios from "../../apis/AppAxios";

const Reserve = (props) => {
  const [festival, setFestival] = useState({});

  useEffect(() => {
    getFestivalById(props.match.params.id);
  }, []);

  const getFestivalById = async (id) => {
    try {
      const res = await AppAxios.get("/festivali/" + id);
      console.log(res);
      setFestival(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  


};

export default Reserve;
