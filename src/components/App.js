import React, { Component } from "react";
// import Header from "./Header";
import "./App.css";
import Podcard from "./Podcard";

export default class App extends Component {
  render() {
    return (
      <div className="main-app-container">
        {/* <Header /> */}
        <main>
          <Podcard />
        </main>
      </div>
    );
  }
}
