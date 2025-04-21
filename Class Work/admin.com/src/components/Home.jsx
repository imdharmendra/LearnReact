import { Link, Outlet } from "react-router-dom";

function Home(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.para}</p>
      <div className="img">
        <Link to="image1">Image 1</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="image2">Image 2</Link>
        <br />
        <br />
        <Outlet />
      </div>
    </>
  );
}

export default Home;
