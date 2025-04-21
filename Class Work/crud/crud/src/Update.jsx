import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const [person, setPerson] = useState({
    name: "",
    mobile: "",
    city: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/person/${id}`)
      .then((res) => {
        setPerson(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const update = () => {
    axios.put(`http://localhost:3000/person/${id}`, person);
    navigate("/");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-50 p-3">
        <form className="border p-3" onSubmit={update}>
          <h2>Update Person</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={person.name}
              onChange={(e) => setPerson({ ...person, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Mobile</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile"
              value={person.mobile}
              onChange={(e) => setPerson({ ...person, mobile: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter City"
              value={person.city}
              onChange={(e) => setPerson({ ...person, city: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
