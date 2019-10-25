import React, { Component } from "react";
import Inputsform from "./inputsForm.js";
import AppSelector from "./appselector.js";
import {
  inputValuesForProject,
  inputValuesForChecklist,
  inputValuesForAppChecklist
} from "./formData.js";
import Appchecklist from "./appChecklist";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Form extends Component {
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

  sendToSlack = () => {
    let webSlackText;
    if (this.state.renderChecklist === "web") {
      webSlackText = {
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "⚡G'day we have a reply!⚡"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Email:*"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.state.email
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Project Name:*"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.state.projectName
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*App or Web:*"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.state.renderChecklist
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Domain or Subdomain*"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.state.domain
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Web URL Checklist*"
            }
          },
          {
            type: "section",
            fields: [
              {
                type: "plain_text",
                text: "Relevant KWs in URL",
                emoji: true
              },
              {
                type: "plain_text",
                text: this.state.urlKeyword.toString(),
                emoji: true
              },
              {
                type: "plain_text",
                text: "URL is within the structure of the website",
                emoji: true
              },
              {
                type: "plain_text",
                text: this.state.urlStrucutre.toString(),
                emoji: true
              },
              {
                type: "plain_text",
                text: "URL doesn't have capital letters",
                emoji: true
              },
              {
                type: "plain_text",
                text: this.state.urlCapital.toString(),
                emoji: true
              }
            ]
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Rendering*"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.state.rendering
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Meta-data Checklist*"
            }
          },
          {
            type: "section",
            fields: [
              {
                type: "plain_text",
                text: "Titles are OK",
                emoji: true
              },
              {
                type: "plain_text",
                text: this.state.titleRequirements.toString(),
                emoji: true
              },
              {
                type: "plain_text",
                text: "Descriptions are OK",
                emoji: true
              },
              {
                type: "plain_text",
                text: this.state.descriptionRequirements.toString(),
                emoji: true
              },
              {
                type: "plain_text",
                text: "H1s are OK",
                emoji: true
              },
              {
                type: "plain_text",
                text: this.state.h1Requirements.toString(),
                emoji: true
              }
            ]
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Is schema present*"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.state.schema
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Page Speed*"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.state.pagespeed
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Comment - web*"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.state.content
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Comment - app*"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.state.appInfo
            }
          },
          {
            type: "divider"
          }
        ]
      };
    } else if (this.state.renderChecklist === "app") {
      webSlackText = {
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "⚡G'day we have a reply!⚡"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Email:*"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.state.email
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*Project Name:*"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.state.projectName
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "*App or Web:*"
            }
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: this.state.renderChecklist
            }
          },
          {
            type: "divider"
          }
        ]
      };
    }

    const urlSlack =
      "https://hooks.slack.com/services/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";

    const stateText = JSON.stringify(webSlackText);
    fetch(urlSlack, {
      mode: "no-cors",
      method: "post",
      body: stateText,
      headers: { "Content-Type": "application/json" }
    })
      .then(response =>
        response.status === 200
          ? this.setState({
              renderChecklist: "thanks",
              emailValidRender: false,
              renderingValid: false
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
        {this.state.renderingValid === true ? (
          <Inputsform
            changeListener={this.handleInputChange}
            inputValues={inputValuesForProject}
            formTitle="Project Information"
            submitButton={false}
            sbumitHandler={this.handleImput}
            blurHadnler={this.handleImput}
          />
        ) : null}

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
        ) : this.state.renderChecklist === "thanks" ? (
          <Appchecklist
            changeListener={this.handleInputChange}
            inputValues={inputValuesForAppChecklist}
            formTitle="Thank you for reaching out $Name. We hared you!"
            submitButton={true}
            sbumitHandler={this.sbumitReply}
            inputValidation={this.inputValidHelper}
          />
        ) : null}
      </>
    );
  }
}

export default Form;
