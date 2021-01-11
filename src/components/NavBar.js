import React from "react";
import Logo from "../Press Play Logo.svg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="main-nav">
      <div id="logo">
        <img src={Logo} alt="PressPlay Logo" />
      </div>
      <input
        id="search-box"
        type="search"
        name="Search Box"
        placeholder="Search for a podcast"
      />

      <div className="nav-links">
        <a className="hvr-sweep-to-right" href="http://">
          Home
        </a>
        <a className="hvr-sweep-to-right" href="http://">
          Login
        </a>
        <a className="hvr-sweep-to-right" href="http://">
          Upload podcast
        </a>
      </div>
    </nav>
  );
}
