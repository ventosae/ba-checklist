import React, { Component } from "react";
import Inputsform from "./inputsForm.js";
import AppSelector from "./appselector.js";
import {
  inputValuesForProject,
  inputValuesForChecklist,
  inputValuesForAppChecklist,
  defaultState,
  SlackMrkdwn
} from "./formData.js";
import Appchecklist from "./appChecklist";
import Textblock from "./textBlock";

const urlSlack =
  "https://hooks.slack.com/services/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";

class SeoChecklist extends Component {
  state = {
    projectName: "",
    email: "",
    domain: "",
    rendering: "",
    schema: "",
    pagespeed: "",
    content: "No comment",
    appInfo: "No comment",
    renderChecklist: "",
    urlKeyword: "no answer",
    urlStrucutre: "no answer",
    urlCapital: "no answer",
    titleRequirements: "no answer",
    descriptionRequirements: "no answer",
    h1Requirements: "no answer",
    projectNameValid: true,
    emailValid: true,
    domainValid: true,
    schemaValid: true,
    pagespeedValid: true,
    contentValid: true,
    emailValidRender: false,
    projectNameValidRender: false,
    renderAppSelector: true,
    renderProjectInformation: true,
    name: ""
  }; 

   

  getName = () => {
    const userName = this.state.email.split(".").shift();
    this.setState({ name: userName });
  };

  stateDefaultHandler = () => {
    this.setState(defaultState);
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
          this.setState({ renderChecklist: false });
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
    this.getName();
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

  fetchToSlack = (url, mode, method, body, headers) =>
    fetch(url, {
      mode: mode,
      method: method,
      body: body,
      headers: headers
    });

  sendToSlack = () => {
    let slackText;

    if (this.state.renderChecklist === "web") {
      slackText = SlackMrkdwn([
        { type: "text-header", text: "⚡G'day we have a reply!⚡" },
        { type: "text-header", text: "Email:" },
        { type: "text", text: this.state.email },
        { type: "text-header", text: "Project Name:" },
        { type: "text", text: this.state.projectName },
        { type: "text-header", text: "App or Web:" },
        { type: "text", text: this.state.renderChecklist },
        { type: "text-header", text: "Domain or Subdomain:" },
        { type: "text", text: this.state.domain },
        { type: "text-header", text: "Web URL Checklist:" },
        {
          type: "text-list",
          text1: "Relevant KWs in URL",
          answer1: this.state.urlKeyword.toString(),
          text2: "URL is within the structure of the website",
          answer2: this.state.urlStrucutre.toString(),
          text3: "URL doesn't have capital letters",
          answer3: this.state.urlCapital.toString()
        },
        { type: "text-header", text: "Rendering" },
        { type: "text", text: this.state.rendering },
        { type: "text-header", text: "Meta-data Checklist:" },
        {
          type: "text-list",
          text1: "Titles are OK",
          answer1: this.state.titleRequirements.toString(),
          text2: "Descriptions are OK",
          answer2: this.state.descriptionRequirements.toString(),
          text3: "H1s are OK",
          answer3: this.state.h1Requirements.toString()
        },
        { type: "text-header", text: "Is schema present:" },
        { type: "text", text: this.state.schema },
        { type: "text-header", text: "Page Speed:" },
        { type: "text", text: this.state.pagespeed },
        { type: "text-header", text: "Comment - web:" },
        { type: "text", text: this.state.content },
        { type: "devider" }
      ]);
    } else if (this.state.renderChecklist === "app") {
      slackText = SlackMrkdwn([
        { type: "text-header", text: "⚡G'day we have a reply!⚡" },
        { type: "text-header", text: "Email:" },
        { type: "text", text: this.state.email },
        { type: "text-header", text: "Project Name:" },
        { type: "text", text: this.state.projectName },
        { type: "text-header", text: "App or Web:" },
        { type: "text", text: this.state.renderChecklist },
        { type: "text-header", text: "App Comment:" },
        { type: "text", text: this.state.appInfo }
      ]);
    }

    const stateText = JSON.stringify(slackText);
    this.fetchToSlack(urlSlack, "no-cors", "post", stateText, {
      "Content-Type": "application/json"
    })
      .then(response =>
        response.status === 0
          ? this.setState({
              renderChecklist: "thanks",
              renderAppSelector: false,
              renderProjectInformation: false
            })
          : this.renderChecklist
      )
      .catch(function(error) {
        console.error("Fetch brings an error. And it is", error);
      });
  };

  sbumitReply = event => {
    event.preventDefault();
    const formValid =
      this.state.renderChecklist === "web" ? this.formValid(event) : true;
    if (formValid) {
      this.sendToSlack();
    }
  };

  render() {
    return (
      <>
        {this.state.renderChecklist === "thanks" ? (
          <Textblock
            formTitle={`Seems like you need help! Thank you for reaching out ${this.state.name}.`}
            text="We've got your submisson and will reach out as soon as possible! Have a good day :)"
            showButton={true}
            buttonText={"Submit Another Project"}
            sbumitHandler={this.stateDefaultHandler}
          />
        ) : null}

        <Inputsform
          changeListener={this.handleInputChange}
          inputValues={inputValuesForProject}
          formTitle="Project Information"
          submitButton={false}
          blurHadnler={this.handleImput}
          renderInputForm={this.state.renderProjectInformation}
        />
        {this.state.emailValidRender === true &&
        this.state.projectNameValidRender === true ? (
          <AppSelector
            tabChangeHandler={this.tabHandler}
            renderApp={this.state.renderAppSelector}
          />
        ) : null}

        {this.state.renderChecklist === "web" ? (
          <Inputsform
            changeListener={this.handleInputChange}
            inputValues={inputValuesForChecklist}
            formTitle="Please fill a Checklist below"
            submitButton={true}
            sbumitHandler={this.sbumitReply}
            renderInputForm={true}
            selectChecklistFlag={this.state.selectChecklistShow}
          />
        ) : this.state.renderChecklist === "app" ? (
          <Appchecklist
            changeListener={this.handleInputChange}
            inputValues={inputValuesForAppChecklist}
            formTitle="It's a little bit different for apps!"
            submitButton={true}
            sbumitHandler={this.sbumitReply}
          />
        ) : null}
      </>
    );
  }
}

export default SeoChecklist;
