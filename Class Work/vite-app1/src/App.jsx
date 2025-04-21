import "./App.css";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Aside from "./Components/Aside";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <div className="para">
        <Content></Content>
        <Aside></Aside>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
