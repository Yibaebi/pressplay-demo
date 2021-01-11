import React from "react";
import NavBar from "./NavBar";
import "./Header.css";

export default function Header() {
  return (
    <header className="header-container">
      <NavBar />
      <div className="hero-text">
        <h1 className="">Welcome to Press Play</h1>
        <em className="">"Speak and be heard!"</em>
      </div>
    </header>
  );
}
