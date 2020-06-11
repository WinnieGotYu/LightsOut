import React, { Component } from "react";
import Board from "./Board";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Lights Off
        </h1>
        <h4>
          Instructions: The goal is to turn off all the lights, ideally with the
          minimum number of clicks. Clicking on a cell toggles that cell and
          each of its immediate neighbors.
        </h4>
        <Board />
      </div>
    );
  }
}

export default App;
