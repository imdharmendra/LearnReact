import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Upage() {
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

  const update = () => {
    axios.patch(`http://localhost:3000/person/${id}`, person);
  };
  return (
    <>
      <div className="update">
        <div className="left">
          <input
            type="text"
            value={person.name}
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
            placeholder="Enter Name"
          />
          <input
            type="text"
            value={person.mobile}
            onChange={(e) => setPerson({ ...person, mobile: e.target.value })}
            placeholder="Enter Mobile Number"
          />
          <input
            type="text"
            value={person.city}
            onChange={(e) => setPerson({ ...person, city: e.target.value })}
            placeholder="Enter City "
          />
          <Link to={"../update"} className="btn1">
            <button onClick={update}>Update Data</button>
          </Link>
        </div>

        <div className="card2">
          <h2>Name: {person.name}</h2>
          <h2>Mobile: {person.mobile}</h2>
          <h2>City: {person.city}</h2>
        </div>
      </div>
    </>
  );
}

export default Upage;
