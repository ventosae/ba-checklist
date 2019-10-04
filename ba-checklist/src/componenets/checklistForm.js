import React, { Component } from "react";
import "../App.css";
import Selectfield from "./select.js";
import Checklistfield from "./checklist.js";
import Textarea from "./textarea.js";
import Fieldsgenerator from "./fields-generator.js";

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

    const textValues = {
      inputChange: this.handleInputChange,
      label: "Any onther information which might be usefull for the team?",
      id: "content"
    };

    const textValuesA = [
      {
        type: "textarea",
        inputChange: "this.handleInputChange",
        label: "Any onther information which might be usefull for the team?",
        id: "content"
      },
      {
        type: "textarea",
        inputChange: "this.handleInputChange",
        label: "Any onther information which might be usefull for the team?",
        id: "content"
      },
      {
        type: "select",
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
      }
    ];

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

            <Checklistfield
              options={checklistValues.pageUrl.options}
              inputLabel={checklistValues.pageUrl.label}
              inputChange={checklistValues.inputChange}
              tooltipmessage={checklistValues.pageUrl.tooltip}
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

            <>
              <Checklistfield
                options={checklistValues.metaData.options}
                inputLabel={checklistValues.metaData.label}
                inputChange={checklistValues.inputChange}
                tooltipmessage={checklistValues.metaData.tooltip}
              />
            </>

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

            <Textarea
              label={textValues.label}
              id={textValues.id}
              changeHandler={textValues.inputChange}
            />

            <Fieldsgenerator
              changeListener={this.handleInputChange}
              values={textValuesA}
            />

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
