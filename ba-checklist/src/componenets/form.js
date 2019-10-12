import React, { Component } from "react";
import Inputsform from "./inputsForm.js";
import AppSelector from "./appselector.js";
import { inputValuesForProject } from "./formData.js";
import { inputValuesForChecklist } from "./formData.js";

class Form extends Component {
  state = {
    formTitle: "Project Information",
    projectName: "",
    email: "",
    formTitle: "Project Checklist",
    projectName: "",
    email: "",
    domain: "",
    rendering: "",
    schema: "",
    pagespeed: "",
    content: "",
    projectNameValid: true,
    emailValid: true,
    domainValid: true,
    renderingValid: true,
    schemaValid: true,
    pagespeedValid: true,
    contentValid: true,
    emailValidRender: false,
    projectNameValidRender: false
  };

  formValid = event => {
    let targetType = event.target.type;
    let eventId = event.target.name;
    let valid = true;
    const fields = this.state;

    let fieldsKeys = [];
    console.log("type is", targetType);
    if (targetType === "text") {
      fieldsKeys.push(eventId);
    } else {
      fieldsKeys = ["domain", "rendering", "schema", "pagespeed"]; // weak part need to go through the dom and collect names. Or there is a better way?!
    }
    for (var i = 0; i < fieldsKeys.length; i++) {
      let key = fieldsKeys[i];
      console.log("the name in state is", key);
      const projectNameStatus = this.lenghValid(fields[key], eventId);
      let fieldsKeyString = String(key);
      let keyValid = fieldsKeyString.concat("Valid");
      let fieldValid = keyValid.concat("Render");
      console.log("Key Valid Value", keyValid);
      if (!projectNameStatus) {
        if (targetType == "text") {
          this.setState({ [keyValid]: projectNameStatus });
          this.setState({ [fieldValid]: projectNameStatus });
          document.getElementById(eventId).className =
            "form-control form-b__input form-b__input--input is-invalid";
          valid = false;
        } else {
          this.setState({ [keyValid]: projectNameStatus });
          document.getElementById(fieldsKeyString).className =
            "form-control form-b__select is-invalid";
          valid = false;
        }
      } else {
        if (targetType === "text") {
          this.setState({ [keyValid]: projectNameStatus });
          this.setState({ [fieldValid]: projectNameStatus });
          document.getElementById(eventId).className =
            "form-control form-b__input form-b__input--input";
        } else {
          document.getElementById(fieldsKeyString).className =
            "form-control form-b__select";
          this.setState({ [keyValid]: projectNameStatus });
        }
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

  emailValid(key) {
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    let result = emailRegex.test(key);

    return result;
  }

  lenghValid(key, name) {
    const keyValue = key;
    const eventName = name;

    if (eventName === "email") {
      console.log(`My name is ${eventName} and return ${this.emailValid(key)}`);
      return this.emailValid(key);
    } else {
      let keyValueLength = keyValue.length;
      return keyValueLength > 0 ? true : false;
    }
  }

  handleImput = event => {
    event.preventDefault();
    this.formValid(event);
  };

  render() {
    return (
      <>
        <Inputsform
          changeListener={this.handleInputChange}
          inputValues={inputValuesForProject}
          formTitle="Project Information"
          submitButton={false}
          sbumitHandler={this.handleImput}
          blurHadnler={this.handleImput}
        />

        {this.state.emailValidRender === true &&
        this.state.projectNameValidRender === true ? (
          <AppSelector render={true} />
        ) : null}

        <Inputsform
          changeListener={this.handleInputChange}
          inputValues={inputValuesForChecklist}
          formTitle="Project Information"
          submitButton={true}
          sbumitHandler={this.handleImput}
          inputValidation={this.inputValidHelper}
        />
      </>
    );
  }
}

export default Form;
