import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Create() {
  const [person, setPerson] = useState({
    name: "",
    mobile: "",
    city: "",
  });
  const navigate = useNavigate();

  const insert = () => {
    axios.post("http://localhost:3000/person", person);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-50 p-3">
        <form className="border p-3" onSubmit={insert}>
          <h2>Create Person</h2>
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
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
