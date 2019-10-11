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
    projectNamePass: false,
    emailPass: false,
    isAppSelectorActive: false,
    isProjectInformationActive: true,
    isAppInformationActive: false
  };

  formValid = event => {
    let targetType = event.target.type;
    let eventId = event.target.name;
    let valid = true;
    const fields = this.state;
    console.log(document.getElementById(eventId).className);
    let fieldsKeys = [];

    if (targetType === "text") {
      fieldsKeys.push(eventId);
    } else {
      fieldsKeys = ["domain", "rendering", "schema", "pagespeed", "content"]; // weak part need to go through the dom and collect names. Or there is a better way?!
    }
    for (var i = 0; i < fieldsKeys.length; i++) {
      let key = fieldsKeys[i];
      console.log("the name in state is", key);
      const projectNameStatus = this.lenghValid(fields[key], eventId);
      let fieldsKeyString = String(key);
      let keyValid = fieldsKeyString.concat("Valid");
      console.log("Key Valid Value", keyValid);
      if (!projectNameStatus) {
        if (targetType === "text") {
          this.setState({ [keyValid]: projectNameStatus });
          document.getElementById(eventId).className =
            "form-control form-b__input form-b__input--input is-invalid";
          valid = false;
        }
        this.setState({ [keyValid]: projectNameStatus });
        valid = false;
      } else {
        if (targetType === "text") {
          this.setState({ [keyValid]: projectNameStatus });
          document.getElementById(eventId).className =
            "form-control form-b__input form-b__input--input";
        }
        // if (eventType === "text ") {
        //   this.setState({ [keyValid]: projectNameStatus });
        // }
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
      return this.emailValid(key);
    } else {
      let keyValueLength = keyValue.length;
      return keyValueLength > 0 ? true : false;
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.formValid(event)) {
      console.log("form is valid");
    } else {
      console.log("form is invalid");
    }
  };

  handleImput = event => {
    event.preventDefault();
    let result = this.formValid(event);
    if (result) {
      this.setState({
        isAppSelectorActive: [
          this.state.projectNameValid === true && this.state.emailValid === true
        ]
          ? true
          : false
      });
    }
  };

  inputValidHelper = e => {
    const inputName = e.target.name;
    debugger;
    console.log("imput name", inputName);
    return true;
  };

  render() {
    return (
      <>
        <Inputsform
          changeListener={this.handleInputChange}
          inputValidation={this.inputValidHelper}
          inputValues={inputValuesForProject}
          formTitle="Project Information"
          render={true}
          submitButton={false}
          sbumitHandler={this.handleSubmit}
          blurHadnler={this.handleImput}
        />
        <AppSelector render={this.state.isAppSelectorActive} />
        <Inputsform
          changeListener={this.handleInputChange}
          inputValues={inputValuesForChecklist}
          formTitle="Project Information"
          render={this.state.isProjectInformationActive}
          submitButton={true}
          sbumitHandler={this.handleSubmit}
          inputValidation={this.inputValidHelper}
        />
      </>
    );
  }
}

export default Form;
