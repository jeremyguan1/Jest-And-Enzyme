import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "./actions";

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3"
          placeholder={"Enter guess"}
        />
        <button data-test="submit-button" type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>
    );
    return (
      <div data-test="component-input">
        <button>{contents}</button>
      </div>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(Input);
