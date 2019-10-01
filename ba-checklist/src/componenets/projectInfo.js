import React, { Component } from "react";
import "../App.css";
import Inputfield from "./input.js";

class ProjectInfo extends Component {
  state = {
    formTitle: "Project Information",
    projectName: "",
    email: "",
    projectNameValid: true,
    emailValid: true,
    formErrors: {
      projectName: "Plese enter project name",
      email: "Email is invalid"
    }
  };

  emailValid(key) {
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    let result = emailRegex.test(key);
    console.log("emailValid", result);
    return result;
  }

  lenghValid(key) {
    let keyValue = key;
    let keyValueLength = keyValue.length;
    console.log("keyValueLength", keyValueLength);
    return keyValueLength > 0 ? true : false;
  }

  // need to be refactored

  formValid = () => {
    let valid = true;
    const fields = this.state;

    const fieldsKeys = [
      "projectName",
      "email",
      "domain",
      "rendering",
      "schema",
      "pagespeed",
      "content"
    ];

    for (var i = 0; i < fieldsKeys.length; i++) {
      let key = fieldsKeys[i];
      console.log(key);
      const projectNameStatus = this.lenghValid(fields[key]);
      let fieldsKeyString = String(key);
      let keyValid = fieldsKeyString.concat("Valid");
      console.log("Key Valid Value", keyValid);
      if (!projectNameStatus) {
        this.setState({ [keyValid]: projectNameStatus });
        valid = false;
      } else {
        this.setState({ [keyValid]: projectNameStatus });
      }
    }
    return valid;
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(`HandleInputChange is Running for ${name}`);

    this.setState({
      [name]: value
    });
  };

  render() {
    const inputValues = {
      inputChange: this.handleInputChange,
      projectName: {
        inputLabel: "Project Name",
        isInputValid: this.state.projectNameValid,
        inputId: "projectName",
        inputPlaceholder: "Project Name"
      },
      clientEmail: {
        inputLabel: "Your Email Address",
        isInputValid: this.state.emailValid,
        inputId: "email",
        inputPlaceholder: "example@sportsbet.com.au"
      }
    };

    const values = this.props.value;
    const type = true;

    return (
      <section className="form-main__wrapper-m form-main__wrapper--form">
        <div className="form-main__wrapper-m__second">
          <h2 className="page-header page-header--h2">
            {this.state.formTitle}
          </h2>
          <div className="form-group form-b__group">
            {values.map(value => {
              if (type) {
                <Inputfield
                  inputChange={this.handleInputChange}
                  inputLabel="1"
                  isInputValid={value.projectName.isInputValid}
                  inputId={value.projectName.inputId}
                  inputPlaceholder={value.projectName.inputPlaceholder}
                  errorMessage={this.state.formErrors.projectName}
                />;
              } else {
                <Inputfield
                  inputChange={this.handleInputChange}
                  inputLabel="2"
                  isInputValid={value.projectName.isInputValid}
                  inputId={value.projectName.inputId}
                  inputPlaceholder={value.projectName.inputPlaceholder}
                  errorMessage={this.state.formErrors.projectName}
                />;
              }
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectInfo;
