import React, { Component } from "react";
import "../App.css";
import Inputfield from "./input.js";
import Selectfield from "./select.js";
import Checklistfield from "./checklist.js";

class Form extends Component {
  state = {
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
    formErrors: {
      projectName: "Plese enter project name",
      email: "Email is invalid",
      domain: "Please pick an answer",
      urlChecklist: "Please pick an answer",
      rendering: "Please pick an answer",
      title: "Please pick an answer",
      description: "Please pick an answer",
      h1: "Please pick an answer",
      schema: "Please pick an answer, COME ON",
      pagespeed: "Please pick an answer"
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

  handleSubmit = event => {
    event.preventDefault();

    if (this.formValid()) {
      console.log("form is valid");
    } else {
      console.log("form is invalid");
    }
  };

  render() {
    const inputValues = {
      inputChange: this.handleInputChange,
      projectName: {
        inputLabel: "Project Name",
        isInputValid: this.state.projectNameValid,
        inputId: "projectName",
        inputPlaceholder: "Project Name",
        tooltip: [
          {
            tolltipcomment: "Please provide info here",
            class: "123"
          }
        ]
      },
      clientEmail: {
        inputLabel: "Your Email Address",
        isInputValid: this.state.emailValid,
        inputId: "email",
        inputPlaceholder: "example@sportsbet.com.au",
        tooltip: [
          {
            tolltipcomment: "Some Examples Below",
            class: "tooltip-header"
          },
          {
            tolltipcomment: "https://www.sportsbet.com.au/betting/rugby-league",
            class: "tooltip-good"
          },
          {
            tolltipcomment: "https://www.sportsbet.com.au/betting/rugby-league",
            class: "tooltip-bad"
          }
        ]
      }
    };

    const selectValues = {
      inputChange: this.handleInputChange,
      domainSubdomain: {
        inputLabel:
          "Subdomain/new domain: is this new content/feature located on a separate domain/subdomain",
        isInputValid: this.state.domainValid,
        inputId: "domain",
        options: [
          "is located on separate subdomain/domain",
          "is NOT located on subdomain/domain"
        ],
        tooltip: [
          {
            tolltipcomment: "Please provide info here",
            class: "123"
          }
        ]
      },
      rendering: {
        inputLabel:
          "Rendering – confirm the web page is rendering fully for Search Engine Crawlers",
        isInputValid: this.state.renderingValid,
        inputId: "rendering",
        options: [
          "Feature is using client side rendering",
          "Feature is NOT using client side rendering",
          "Not Sure"
        ],
        tooltip: [
          {
            tolltipcomment: "Please provide info here",
            class: "123"
          }
        ]
      },
      schemaMarkups: {
        inputLabel: "Schema Markups",
        isInputValid: this.state.schemaValid,
        inputId: "schema",
        options: [
          "Schema Markups are implemented",
          "Schema Markups are NOT implemented",
          "Not Sure"
        ],
        tooltip: [
          {
            tolltipcomment: "Please provide info here",
            class: "123"
          }
        ]
      },
      PageLoadSpeed: {
        inputLabel: "Page Load Speed",
        isInputValid: this.state.pagespeedValid,
        inputId: "pagespeed",
        options: [
          "Page load speed is considered as per overall Sportsbet standard",
          "Page load speed is NOT considered as per overall Sportsbet standard",
          "Not Sure"
        ],
        tooltip: [
          {
            tolltipcomment: "Please provide info here",
            class: "123"
          }
        ]
      }
    };

    return (
      <form className="form-b was-invalidated" onSubmit={this.handleSubmit}>
        <div className="form-group form-b__group">
          <Inputfield
            inputChange={inputValues.inputChange}
            inputLabel={inputValues.projectName.inputLabel}
            isInputValid={inputValues.projectName.isInputValid}
            inputId={inputValues.projectName.inputId}
            inputPlaceholder={inputValues.projectName.inputPlaceholder}
            //classes cold be tooltip-good / tooltip-bad / tooltip-comment / tooltip-header
            tooltipmessage={inputValues.projectName.tooltip}
            errorMessage={this.state.formErrors.projectName}
          />

          <Inputfield
            inputChange={inputValues.inputChange}
            inputLabel={inputValues.clientEmail.inputLabel}
            isInputValid={inputValues.clientEmail.isInputValid}
            inputId={inputValues.clientEmail.inputId}
            inputPlaceholder={inputValues.clientEmail.inputPlaceholder}
            //classes cold be tooltip-good / tooltip-bad / tooltip-comment / tooltip-header
            tooltipmessage={inputValues.clientEmail.tooltip}
            errorMessage={this.state.formErrors.email}
          />
        </div>

        <Selectfield
          options={selectValues.domainSubdomain.options}
          inputLabel={selectValues.domainSubdomain.inputLabel}
          isInputValid={selectValues.domainSubdomain.isInputValid}
          inputId={selectValues.domainSubdomain.inputId}
          inputChange={selectValues.inputChange}
          errorMessage={this.state.formErrors.domain}
          //classes cold be .tooltip-good / .tooltip-bad / .tooltip-comment
          tooltipmessage={selectValues.domainSubdomain.tooltip}
        />

        <Checklistfield
          options={[
            {
              optionLable:
                "Make sure the new URL(s) are using keywords relevant to the page",
              optionState: "urlKeyword"
            },
            {
              optionLable:
                "URL is within the structure of the website category",
              optionState: "urlStrucutre"
            },
            {
              optionLable:
                "URL doesn’t have capital letters or special symbols",
              optionState: "urlCapital"
            }
          ]}
          inputLabel="Web Page URL"
          inputChange={this.handleInputChange}
        />

        <Selectfield
          options={selectValues.rendering.options}
          inputLabel={selectValues.rendering.inputLabel}
          isInputValid={selectValues.rendering.isInputValid}
          inputId={selectValues.rendering.inputId}
          inputChange={selectValues.inputChange}
          errorMessage={this.state.formErrors.rendering}
          //classes cold be .tooltip-good / .tooltip-bad / .tooltip-comment
          tooltipmessage={selectValues.rendering.tooltip}
        />

        <Checklistfield
          options={[
            {
              optionLable: "Title tag requirements are fulfilled",
              optionState: "titleRequirements"
            },
            {
              optionLable: "Description tag requirements are fulfilled",
              optionState: "descriptionRequirements"
            },
            {
              optionLable: "H1 tag requirements are fulfilled",
              optionState: "h1Requirements"
            }
          ]}
          inputLabel="Meta Data"
          inputChange={this.handleInputChange}
        />

        <Selectfield
          options={selectValues.schemaMarkups.options}
          inputLabel={selectValues.schemaMarkups.inputLabel}
          isInputValid={selectValues.schemaMarkups.isInputValid}
          inputId={selectValues.schemaMarkups.inputId}
          inputChange={selectValues.inputChange}
          errorMessage={this.state.formErrors.schema}
          //classes cold be .tooltip-good / .tooltip-bad / .tooltip-comment
          tooltipmessage={selectValues.schemaMarkups.tooltip}
        />

        <Selectfield
          options={selectValues.PageLoadSpeed.options}
          inputLabel={selectValues.PageLoadSpeed.inputLabel}
          isInputValid={selectValues.PageLoadSpeed.isInputValid}
          inputId={selectValues.PageLoadSpeed.inputId}
          inputChange={selectValues.inputChange}
          errorMessage={this.state.formErrors.pagespeed}
          //classes cold be .tooltip-good / .tooltip-bad / .tooltip-comment
          tooltipmessage={selectValues.PageLoadSpeed.tooltip}
        />

        <div className="form-group form-b__group">
          <label for="content">
            Any onther information which might be usefull for the team?
          </label>
          <textarea
            className="form-control form-b_text"
            id="content"
            rows="3"
            value={this.state.content}
            onChange={this.handleInputChange}
            name="content"
          />
        </div>

        <button type="submit" className="btn btn-primary form-main__button">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
