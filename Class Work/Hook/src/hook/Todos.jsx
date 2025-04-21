import axios from "axios";
import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const list = todos.map((todo) => (
    <div key={todo.id} className="card">
      <table>
        <tr>
          <th>Title</th>
          <th>Status Completed</th>
        </tr>
        <tr>
          <td>{todo.title}</td>
          <td>True</td>
        </tr>
      </table>
    </div>
  ));
  return (
    <>
      <div className="pack">{list}</div>
    </>
  );
}

export default Todos;
