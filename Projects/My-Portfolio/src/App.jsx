// import React from "react";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import MyWork from "./Components/MyWork/MyWork";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
