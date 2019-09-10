import React, { Component } from "react";
import Error from "./error.js";

class Inputfield extends Component {
  state = {};

  render() {
    return (
      <div className="form-b__input-container">
        <label className="form-b__lable" for="project-input">
          {this.props.inputLabel}
        </label>
        <input
          className={`form-control form-b__input ${
            this.props.isInputValid ? "" : "is-invalid"
          }`}
          id={this.props.inputId}
          placeholder={this.props.inputPlaceholder}
          onChange={this.props.inputChange}
          name={this.props.inputId}
        />
        <Error errorMessage={this.props.errorMessage} />
      </div>
    );
  }
}

export default Inputfield;
