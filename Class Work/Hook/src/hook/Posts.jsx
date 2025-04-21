import axios from "axios";
import { useEffect, useState } from "react";

function Posts() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/blogs")
      .then((res) => {
        console.log(res);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const list = blogs.map((blog) => (
    <div key={blog.id} className="card">
      <img src={blog.image} alt="" className="img" /><h4>{blog.category}</h4> <h1>{blog.title}</h1> <p>{blog.content}</p> <div className="detail"> <h3>~{blog.author}</h3> <p>{blog.published_date}</p></div>
    </div>
  ));
  return (
    <>
      <h1>This is Posts API data.</h1>
      <div className="pack">{list}</div>
    </>
  );
}

export default Posts;
