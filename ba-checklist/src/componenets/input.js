import React, { Component } from "react";
import Error from "./error.js";

class Inputfield extends Component {
  state = {
    projectName: "Please enter project name",
    email: "Email is invalid",
    isProjectValid: this.props.validation
  };

  render() {
    return (
      <div className="form-b__input-container">
        <label className="form-b__lable" for="project-input">
          Project Name
        </label>
        <input
          className={`form-control form-b__input ${
            this.state.isProjectValid ? "" : "is-invalid"
          }`}
          id="project-input"
          placeholder="Project Name"
          onChange={this.props.inputChange}
          value={this.state.projectName}
          name="projectName"
        />
        <Error errorMessage={this.state.projectName} />
      </div>
    );
  }
}

export default Inputfield;
