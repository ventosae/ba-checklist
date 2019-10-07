import React, { Component } from "react";
import Inputsform from "./inputsForm.js";
import AppSelector from "./appselector.js";

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

  lenghValid(key) {
    let keyValue = key;
    let keyValueLength = keyValue.length;
    console.log("keyValueLength", keyValueLength);
    return keyValueLength > 0 ? true : false;
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.formValid()) {
      console.log("form is valid");
    } else {
      console.log("form is invalid");
    }
  };
  render() {
    const inputValues = [
      {
        type: "input",
        inputLabel: "Project Name",
        isInputValid: this.state.projectNameValid,
        inputId: "projectName",
        inputPlaceholder: "Project Name",
        errorMessage: "Plese enter project name",
        tooltip: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        type: "input",
        inputLabel: "Your Email Address",
        isInputValid: this.state.emailValid,
        inputId: "email",
        inputPlaceholder: "example@sportsbet.com.au",
        errorMessage: "Email is invalid",
        tooltip: [
          {
            tooltipComment: "Some Examples Below",
            class: "tooltip-header"
          },
          {
            tooltipComment: "https://www.sportsbet.com.au/betting/rugby-league",
            class: "tooltip-good"
          },
          {
            tooltipComment: "https://www.sportsbet.com.au/betting/rugby-league",
            class: "tooltip-bad"
          }
        ]
      }
    ];

    const inputChecklistValues = [
      {
        type: "select",
        inputLabel:
          "Subdomain/new domain: is this new content/feature located on a separate domain/subdomain",
        isInputValid: this.state.domainValid,
        inputId: "domain",
        errorMessage: "Please pick an answer",
        options: [
          "is located on separate subdomain/domain",
          "is NOT located on subdomain/domain"
        ],
        tooltip: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        type: "checklist",
        label: "Web Page URL",
        errorMessage: "Please pick an answer",
        options: [
          {
            optionLabel:
              "Make sure the new URL(s) are using keywords relevant to the page",
            optionState: "urlKeyword",
            tooltiptext: [
              {
                tooltipComment: "Please provide info here",
                class: "123"
              }
            ]
          },
          {
            optionLabel: "URL is within the structure of the website category",
            optionState: "urlStrucutre",
            tooltiptext: [
              {
                tooltipComment: "Please provide info here",
                class: "123"
              }
            ]
          },
          {
            optionLabel: "URL doesn’t have capital letters or special symbols",
            optionState: "urlCapital",
            tooltiptext: [
              {
                tooltipComment: "Please provide info here",
                class: "123"
              }
            ]
          }
        ]
      },
      {
        type: "select",
        inputLabel:
          "Rendering – confirm the web page is rendering fully for Search Engine Crawlers",
        isInputValid: this.state.renderingValid,
        errorMessage: "Please pick an answer",
        inputId: "rendering",
        options: [
          "Feature is using client side rendering",
          "Feature is NOT using client side rendering",
          "Not Sure"
        ],
        tooltip: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        type: "checklist",
        label: "Meta Data",
        options: [
          {
            optionLabel: "Title tag requirements are fulfilled",
            optionState: "titleRequirements",
            tooltiptext: [
              {
                tooltipComment: "Please provide info here",
                class: "123"
              }
            ]
          },
          {
            optionLabel: "Description tag requirements are fulfilled",
            optionState: "descriptionRequirements",
            tooltiptext: [
              {
                tooltipComment: "Please provide info here",
                class: "123"
              }
            ]
          },
          {
            optionLabel: "H1 tag requirements are fulfilled",
            optionState: "h1Requirements",
            tooltiptext: [
              {
                tooltipComment: "Please provide info here",
                class: "123"
              }
            ]
          }
        ]
      },
      {
        type: "select",
        inputLabel: "Schema Markups",
        errorMessage: "Please pick an answer",
        isInputValid: this.state.schemaValid,
        inputId: "schema",
        options: [
          "Schema Markups are implemented",
          "Schema Markups are NOT implemented",
          "Not Sure"
        ],
        tooltip: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        type: "select",
        inputLabel: "Page Load Speed",
        errorMessage: "Please pick an answer",
        isInputValid: this.state.pagespeedValid,
        inputId: "pagespeed",
        options: [
          "Page load speed is considered as per overall Sportsbet standard",
          "Page load speed is NOT considered as per overall Sportsbet standard",
          "Not Sure"
        ],
        tooltip: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      {
        type: "textarea",
        inputChange: "this.handleInputChange",
        label: "Any onther information which might be usefull for the team?",
        id: "content"
      }
    ];
    return (
      <>
        <Inputsform
          changeListener={this.handleInputChange}
          inputValues={inputValues}
          formTitle="Project Information"
          submitButton={false}
          sbumitHandler={this.handleSubmit}
        />
        <AppSelector />
        <Inputsform
          changeListener={this.handleInputChange}
          inputValues={inputChecklistValues}
          formTitle="Project Information"
          submitButton={true}
          sbumitHandler={this.handleSubmit}
        />
      </>
    );
  }
}

export default Form;
