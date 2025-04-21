import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Dpage() {
  const [person, setPerson] = useState({
    name: "",
    mobile: "",
    city: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/person/${id}`)
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Delete = () => {
    axios.delete(`http://localhost:3000/person/${id}`, person);
  };
  return (
    <>
      <div className="dpage">
        <div className="card3">
          <h2>Name: {person.name}</h2>
          <h2>Mobile: {person.mobile}</h2>
          <h2>City: {person.city}</h2>
        </div>
        <Link to={"../view"} className="btn2">
          <button onClick={Delete}>Delete Data</button>
        </Link>
      </div>
    </>
  );
}

export default Dpage;
