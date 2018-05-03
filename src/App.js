import React, { Component } from 'react';
import SingleDay from './components/SingleDay';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">NYC Weather Forecast</h1>
        </header>
        <SingleDay />
      </div>
    );
  }
}

export default App;
