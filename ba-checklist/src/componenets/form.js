import React, { Component } from "react";
import "../App.css";
import Error from "./error.js";
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
    return (
      <form className="form-b was-invalidated" onSubmit={this.handleSubmit}>
        <div className="form-group form-b__group">
          <Inputfield
            inputChange={this.handleInputChange}
            inputLabel="Domain"
            isInputValid={this.state.projectNameValid}
            inputId="projectName"
            inputPlaceholder="Project Name"
            errorMessage={this.state.formErrors.projectName}
          />

          <Inputfield
            inputChange={this.handleInputChange}
            inputLabel="Your Email Address"
            isInputValid={this.state.emailValid}
            inputId="email"
            inputPlaceholder="example@sportsbet.com.au"
            errorMessage={this.state.formErrors.email}
          />
        </div>

        <Selectfield
          options={[
            "is located on separate subdomain/domain",
            "is NOT located on subdomain/domain"
          ]}
          inputLabel="Subdomain/new domain: is this new content/feature located on a
          separate domain/subdomain"
          isInputValid={this.state.domainValid}
          inputId="domain"
          inputChange={this.handleInputChange}
          errorMessage={this.state.formErrors.domain}
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
          options={[
            "Feature is using client side rendering",
            "Feature is NOT using client side rendering",
            "Not Sure"
          ]}
          inputLabel="Rendering – confirm the web page is rendering fully for Search
          Engine Crawlers"
          isInputValid={this.state.renderingValid}
          inputId="rendering"
          inputChange={this.handleInputChange}
          errorMessage={this.state.formErrors.rendering}
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
          options={[
            "Schema Markups are implemented",
            "Schema Markups are NOT implemented",
            "Not Sure"
          ]}
          inputLabel="Schema Markups"
          isInputValid={this.state.schemaValid}
          inputId="schema"
          inputChange={this.handleInputChange}
          errorMessage={this.state.formErrors.schema}
        />

        <Selectfield
          options={[
            "Page load speed is considered as per overall Sportsbet standard",
            "Page load speed is NOT considered as per overall Sportsbet standard",
            "Not Sure"
          ]}
          inputLabel="Page Load Speed"
          isInputValid={this.state.pagespeedValid}
          inputId="pagespeed"
          inputChange={this.handleInputChange}
          errorMessage={this.state.formErrors.pagespeed}
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
