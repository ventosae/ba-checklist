import React, { Component } from "react";
import "../App.css";
import Selectfield from "./select.js";
import Checklistfield from "./checklist.js";

class ChecklistForm extends Component {
  state = {
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
            tooltipComment: "Please provide info here",
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
            tooltipComment: "Please provide info here",
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
            tooltipComment: "Please provide info here",
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
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      }
    };

    const checklistValues = {
      inputChange: this.handleInputChange,
      pageUrl: {
        label: "Web Page URL",
        options: [
          {
            optionLabel:
              "Make sure the new URL(s) are using keywords relevant to the page",
            optionState: "urlKeyword"
          },
          {
            optionLabel: "URL is within the structure of the website category",
            optionState: "urlStrucutre"
          },
          {
            optionLabel: "URL doesn’t have capital letters or special symbols",
            optionState: "urlCapital"
          }
        ],
        tooltip: [
          {
            tooltipComment: "Please provide info here",
            class: "123"
          }
        ]
      },
      metaData: {
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
      }
    };

    return (
      <section className="form-main__wrapper-m form-main__wrapper--form">
        <div className="form-main__wrapper-m__second">
          <h2 className="page-header page-header--h2">
            {this.state.formTitle}
          </h2>
          <form className="form-b was-invalidated" onSubmit={this.handleSubmit}>
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

            {/* <Checklistfield
              options={checklistValues.pageUrl.options}
              inputLabel={checklistValues.pageUrl.label}
              inputChange={checklistValues.inputChange}
              tooltipmessage={checklistValues.pageUrl.tooltip}
            /> */}

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
              options={checklistValues.metaData.options}
              inputLabel={checklistValues.metaData.label}
              inputChange={checklistValues.inputChange}
              tooltipmessage={checklistValues.metaData.tooltip}
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
        </div>
      </section>
    );
  }
}

export default ChecklistForm;
