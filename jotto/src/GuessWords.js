import React from "react";
import PropTypes from "prop-types";

const GuessWords = props => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = <span data-test="guess-instructions">Try to guess the secret word!</span>;
  } else {
    const guessWordsRows = props.guessedWords.map((word, index) => {
      return (
        <tr data-test="guessed-word" key={index}>
          <td>{word.guessWord}</td>
          <td>{word.letterMatchCount}</td>
        </tr>
      );
    });
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessWordsRows}</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessWords;
