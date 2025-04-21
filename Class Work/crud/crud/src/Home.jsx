import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Home() {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/person")
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const { id } = useParams();

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/person/${id}`);
    window.location.reload();
  };
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 p-3">
        <Link to="/create" className="btn btn-primary w-100 mb-3 mt-3">
          Insert +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {person.map((person) => {
              return (
                <tr key={person.id}>
                  <td>{person.name}</td>
                  <td>{person.mobile}</td>
                  <td>{person.city}</td>
                  <td>
                    <Link
                      to={`/update/${person.id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                    <button
                      onClick={(e) => handleDelete(person.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
