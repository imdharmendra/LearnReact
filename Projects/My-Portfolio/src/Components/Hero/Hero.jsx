// import React from 'react'
import "./Hero.css";
// import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../../assets/profile.jpg";

function Hero() {
  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1FkFnvO9nwEw7Nu8TWBii_3WmsSOS4Bsp/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div id="home" className="hero">
      <img src={profile} alt="" />
      <h1>
        Hello <span>Im Dharmendra,</span> Frontend Developer based in India.
      </h1>
      <p>
        Im a Frotend developer from Noida, India with 10 years of experience in
        multiple companies like HCL, TCS and DELOITTE.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <button>
            <AnchorLink className="anchor-link" offset={20} href="#contact">
              Connect With Me
            </AnchorLink>
          </button>
        </div>
        <button className="hero-resume" onClick={handleResumeClick}>
          My Resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
