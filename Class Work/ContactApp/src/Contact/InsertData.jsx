import axios from "axios";
import { useState } from "react";

function InsertData() {
  const [person, setPerson] = useState({
    name: "",
    mobile: "",
    city: "",
  });

  const insert = () => {
    axios.post("http://localhost:3000/person", person);
  };
  return (
    <>
      <div className="insert">
        <form onSubmit={insert}>
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

          <button>Insert Data</button>
        </form>
      </div>
    </>
  );
}

export default InsertData;
