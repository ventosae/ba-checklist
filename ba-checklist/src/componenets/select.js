import React, { Component } from "react";
import Error from "./error.js";

class Selectfield extends Component {
  state = {};

  render() {
    const options = this.props.options;
    return (
      <div className="form-group form-b__group">
        <label className="form-b__lable" for="question1">
          {this.props.inputLabel}
        </label>
        <select
          className={`form-control form-b__select ${
            this.props.isInputValid ? "" : "is-invalid"
          }`}
          id={this.props.inputId}
          onChange={this.props.inputChange}
          name={this.props.inputId}
        >
          <option default className={"form-b__option--select"} value="">
            Select...
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Error errorMessage={this.props.errorMessage} />
      </div>
    );
  }
}

export default Selectfield;
