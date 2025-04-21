// import React from 'react'
import "./Navbar.css";
// import logo from "../../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import toggle_icon from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import dharmendra_logo from "../../assets/dharmendra_logo.png";
import { useRef } from "react";

function Navbar() {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={dharmendra_logo} alt="" className="logo" />
      <img
        src={toggle_icon}
        onClick={openMenu}
        alt=""
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            Home
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={10} href="#about">
            About me
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={20} href="#services">
            Services
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={20} href="#work">
            Portfolio
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={20} href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <button>
          <AnchorLink className="anchor-link" offset={20} href="#contact">
            Connect With Me
          </AnchorLink>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
