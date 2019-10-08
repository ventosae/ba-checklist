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
    projectNameValid: " ",
    emailValid: " ",
    domainValid: true,
    renderingValid: true,
    schemaValid: true,
    pagespeedValid: true,
    contentValid: true,
    isAppSelectorActive: false,
    isProjectInformationActive: false,
    isAppInformationActive: false
  };

  formValid = event => {
    let eventType = event.target.type;
    let eventId = event.target.name;
    let valid = true;
    const fields = this.state;

    let fieldsKeys = [];

    if (eventType === "text") {
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
          render={true}
          submitButton={false}
          sbumitHandler={this.handleSubmit}
          blurHadnler={this.handleImput}
        />
        <AppSelector render={this.state.isAppSelectorActive} />
        <Inputsform
          changeListener={this.handleInputChange}
          inputValues={inputChecklistValues}
          formTitle="Project Information"
          render={this.state.isProjectInformationActive}
          submitButton={true}
          sbumitHandler={this.handleSubmit}
        />
      </>
    );
  }
}

export default Form;
