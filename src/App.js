import React, { Component } from "react";
import Game from "./Game";
import "./App.css";

/** Simple app that just shows the LightsOut game. */

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Lights Out <i class="far fa-lightbulb"></i>
        </h1>
        <h3>
          {" "}
          Instructions: The goal is to turn out all the lights, ideally with the
          minimum number of clicks.
        </h3>
        <h3>
          Clicking on a cell toggles that cell and each of its immediate
          neighbors.
        </h3>
        <Game />
      </div>
    );
  }
}

export default App;
