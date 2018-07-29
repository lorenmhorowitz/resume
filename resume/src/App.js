import React, { Component } from 'react';
import './App.css';
import SideBar from "./SideBar/sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Loren Horowitz</h1>
        </header>
        <SideBar />
      </div>
    );
  }
}

export default App;
