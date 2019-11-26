import React, { Component } from "react";
import "./App.css";
import GuessWords from "./GuessWords";
import Congrats from "./Congrats";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessWords guessedWords={[{ guessedWords: "train", letterMatchCount: 3 }]} />
      </div>
    );
  }
}
