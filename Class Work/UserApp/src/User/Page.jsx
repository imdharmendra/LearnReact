import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Page() {
  const [person, setPerson] = useState([]);

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
  return (
    <>
      <div className="page">
        <h1>This is a Single Page View</h1>
        <div className="card">
          <h2>Name: {person.name}</h2>
          <h2>Mobile: {person.mobile}</h2>
          <h2>City: {person.city}</h2>
        </div>
      </div>
    </>
  );
}

export default Page;
