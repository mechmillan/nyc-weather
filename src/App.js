import React, { Component } from "react";
import SingleDay from "./components/SingleDay";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NYC Weather</h1>
          <p>Visit this page to see New York City's next 7-day Forecast!</p>
        </header>
        <SingleDay />
      </div>
    );
  }
}

export default App;
