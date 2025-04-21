import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="card" element={<Card />}></Route>
        <Route path="disable" element={<h1>Disabled</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
