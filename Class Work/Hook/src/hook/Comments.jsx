import axios from "axios";
import { useEffect, useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        console.log(res);
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const list = comments.map((comment) => (
    <div key={comment.id} className="card">
      <h1>{comment.name}</h1>
      <h3>{comment.email}</h3>
      <h3>{comment.body}</h3>
    </div>
  ));
  return (
    <>
      <div className="pack">{list}</div>
    </>
  );
}

export default Comments;
