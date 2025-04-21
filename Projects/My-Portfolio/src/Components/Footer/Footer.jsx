// import React from 'react'
import "./Footer.css";
import dharmendra_logo from "../../assets/dharmendra_logo.png";
import user_icon from "../../assets/user_icon.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={dharmendra_logo} alt="" />
          <p>
            My passion for frontend development is not only reflected in my
            extensive experience but also in the enthusiasm and dedication I
            bring to each project.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button className="footer-subscribe">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © 2024 Dharmendra Singh. All rights reserved.
        </div>
        <div className="footer-bottom-right">
          <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
            <li>Connect with me</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
