import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import GuessWords from "./GuessWords";
import Congrats from "./Congrats";
import { getSecretWord } from "./actions";

class App extends Component {
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
const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(App);
