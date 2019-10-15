import React, { Component } from "react";
import Inputsform from "./inputsForm.js";
import AppSelector from "./appselector.js";
import {
  inputValuesForProject,
  inputValuesForChecklist,
  inputValuesForAppChecklist
} from "./formData.js";
import Appchecklist from "./appChecklist";
import SlackFeedback, { themes } from "react-slack-feedback";

class Form extends Component {
  state = {
    projectName: "",
    email: "",
    domain: "",
    rendering: "",
    schema: "",
    pagespeed: "",
    content: "",
    appInfo: "",
    renderChecklist: "",
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
        if (targetType === "text") {
          this.setState({ [keyValid]: projectNameStatus });
          this.setState({ [fieldValid]: projectNameStatus });
          document.getElementById(eventId).className =
            "form-control form-b__input form-b__input--input is-invalid";
          // this.setState({ renderChecklist: false });
          valid = false;
        } else {
          this.setState({ [keyValid]: projectNameStatus });
          document.getElementById(fieldsKeyString).className =
            "form-control form-b__select is-invalid";
          // this.setState({ renderChecklist: false });
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

  tabHandler = event => {
    let eventId = event.target.id;
    this.setState({ renderChecklist: eventId });
  };

  sbumitReply = event => {
    event.preventDefault();
    const formValid = this.formValid(event);
    // const stateText = formValid ? JSON.stringify(this.state) : null;
    // console.log("state", stateText);
    // console.log("state", JSON.stringify(this.state));
  };

  render() {
    function sendToServer(payload, success, error) {
      console.log();
      return fetch("/api/slack", {
        method: "POST",
        body: JSON.stringify(payload)
      })
        .then(success)
        .catch(error);
    }

    function uploadImage(image, success, error) {
      var form = new FormData();
      form.append("image", image);

      return fetch("/api/upload", { method: "POST", data: form })
        .then(({ url }) => success(url))
        .catch(err => error(err));
    }
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
          <AppSelector tabChangeHandler={this.tabHandler} />
        ) : null}

        {this.state.renderChecklist === "web" ? (
          <Inputsform
            changeListener={this.handleInputChange}
            inputValues={inputValuesForChecklist}
            formTitle="Project Checklist"
            submitButton={true}
            sbumitHandler={this.sbumitReply}
            inputValidation={this.inputValidHelper}
          />
        ) : this.state.renderChecklist === "app" ? (
          <Appchecklist
            changeListener={this.handleInputChange}
            inputValues={inputValuesForAppChecklist}
            formTitle="Thank you for reaching out $Name"
            submitButton={true}
            sbumitHandler={this.sbumitReply}
            inputValidation={this.inputValidHelper}
          />
        ) : null}
        <SlackFeedback
          channel="#general"
          theme={themes.dark} // (optional) See src/themes/default for default theme
          user="Slack Feedback" // The logged in user (default = "Unknown User")
          onImageUpload={(image, success, error) =>
            uploadImage(image)
              .then(({ url }) => success(url))
              .catch(error)
          }
          onSubmit={(payload, success, error) =>
            sendToServer(payload)
              .then(success)
              .catch(error)
          }
        />
      </>
    );
  }
}

export default Form;
