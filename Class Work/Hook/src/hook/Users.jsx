import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const list = users.map((user) => (
    <div key={user.id} className="card" id={user.theme}>
      <div className="id">
        <div className="box">
          <h1>Name : {user.name}</h1>
          <h2>Course : {user.course}</h2>
          <h2>Batch : {user.batch}</h2>
          <h2>Branch : Ducat {user.branch}</h2>
        </div>
        <div className="box">
          <img src={user.image} alt="" height="160px" width="130px" />
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="pack">{list}</div>
    </>
  );
}

export default Users;
