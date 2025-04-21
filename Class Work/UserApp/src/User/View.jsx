import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function View() {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/person")
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [person]);

  const list = person.map((person) => (
    <tr key={person.id}>
      <td>{person.name}</td>
      <td>{person.mobile}</td>
      <td>{person.city}</td>
      <td>
        <Link to={`../page/${person.id}`}>View</Link>
      </td>
      <td>
        <Link to={`../upage/${person.id}`}>Update</Link>
      </td>
      <td>
        <Link to={`../dpage/${person.id}`}>Delete</Link>
      </td>
    </tr>
  ));
  return (
    <>
      <div className="table">
        <table border={1}>
          <thead>
            <th>Name</th>
            <th>Mobile</th>
            <th>City</th>
            <th>S.P.V</th>
            <th>Update</th>
            <th>Delete</th>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    </>
  );
}

export default View;
