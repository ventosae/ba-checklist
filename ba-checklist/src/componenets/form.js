import React, { Component } from "react";
import Error from "./error.js";
import "../App.css";

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val.length <= 0 && (valid = false);
//   });

//   return valid;
// };

class Form extends Component {
  state = {
    projectName: "",
    email: "",
    domain: "",
    urlKeyword: false,
    urlStrucutre: "",
    urlCapital: "",
    rendering: "",
    title: "",
    description: "",
    h1: "",
    schema: "",
    pagespeed: "",
    content: "",
    isProjectValid: true,
    isEmailValid: true,
    isDomainValid: true,
    isRenderingValid: true,
    isPageSpeedValid: true,
    isSchemaValid: true,
    // isUrlKeywordValid: true,
    // isUrlStrucutreValid: true,
    // isUrlCapitalValid: true,
    // isTitleValid: true,
    // isDescriptionValid: true,
    // isH1Valid: true,
    formErrors: {
      projectName: "You sucks",
      email: "Your email sucks, sorry ",
      domain: "You sucks",
      urlKeyword: "You sucks",
      urlStrucutre: "You sucks",
      urlCapital: "You sucks",
      rendering: "You sucks",
      title: "You sucks",
      description: "You sucks",
      h1: "You sucks",
      schema: "You sucks",
      pagespeed: "You sucks",
      content: "You sucks"
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

    for (let key in fields) {
      if (key === "projectName") {
        const projectNameStatus = this.lenghValid(fields[key]);
        if (!projectNameStatus) {
          this.setState({ isProjectValid: projectNameStatus });
          valid = false;
        } else {
          this.setState({ isProjectValid: projectNameStatus });
        }
      }
      if (key === "email") {
        const emailValidationStatus = this.emailValid(fields[key]);
        if (!emailValidationStatus) {
          this.setState({ isEmailValid: emailValidationStatus });
          valid = false;
        } else {
          this.setState({ isEmailValid: emailValidationStatus });
        }
      }

      if (key === "domain") {
        const domainValidationStatus = this.lenghValid(fields[key]);
        if (!domainValidationStatus) {
          this.setState({ isDomainValid: domainValidationStatus });
          valid = false;
        } else {
          this.setState({ isDomainValid: domainValidationStatus });
        }
      }

      if (key === "schema") {
        const validationStatus = this.lenghValid(fields[key]);
        if (!validationStatus) {
          this.setState({ isSchemaValid: validationStatus });
          valid = false;
        } else {
          this.setState({ isSchemaValid: validationStatus });
        }
      }

      if (key === "pagespeed") {
        const validationStatus = this.lenghValid(fields[key]);
        if (!validationStatus) {
          this.setState({ isPageSpeedValid: validationStatus });
          valid = false;
        } else {
          this.setState({ isPageSpeedValid: validationStatus });
        }
      }

      if (key === "rendering") {
        const validationStatus = this.lenghValid(fields[key]);
        if (!validationStatus) {
          this.setState({ isRenderingValid: validationStatus });
          valid = false;
        } else {
          this.setState({ isRenderingValid: validationStatus });
        }
      }

      // if (key === "urlKeyword") {
      //   const validationStatus = this.lenghValid(fields[key]);
      //   if (!validationStatus) {
      //     this.setState({ isUrlKeywordValid: validationStatus });
      //     valid = false;
      //   } else {
      //     this.setState({ isUrlKeywordValid: validationStatus });
      //   }
      // }

      // if (key === "urlStrucutre") {
      //   const validationStatus = this.lenghValid(fields[key]);
      //   if (!validationStatus) {
      //     this.setState({ isUrlStrucutreValid: validationStatus });
      //     valid = false;
      //   } else {
      //     this.setState({ isUrlStrucutreValid: validationStatus });
      //   }
      // }

      // if (key === "urlCapital") {
      //   const validationStatus = this.lenghValid(fields[key]);
      //   if (!validationStatus) {
      //     this.setState({ isUrlCapitalValid: validationStatus });
      //     valid = false;
      //   } else {
      //     this.setState({ isUrlCapitalValid: validationStatus });
      //   }
      // }

      // if (key === "title") {
      //   const validationStatus = this.lenghValid(fields[key]);
      //   if (!validationStatus) {
      //     this.setState({ isTitleValid: validationStatus });
      //     valid = false;
      //   } else {
      //     this.setState({ isTitleValid: validationStatus });
      //   }
      // }

      // if (key === "description") {
      //   const validationStatus = this.lenghValid(fields[key]);
      //   if (!validationStatus) {
      //     this.setState({ isDescriptionValid: validationStatus });
      //     valid = false;
      //   } else {
      //     this.setState({ isDescriptionValid: validationStatus });
      //   }
      // }

      // if (key === "h1") {
      //   const validationStatus = this.lenghValid(fields[key]);
      //   if (!validationStatus) {
      //     this.setState({ isH1Valid: validationStatus });
      //     valid = false;
      //   } else {
      //     this.setState({ isH1Valid: validationStatus });
      //   }
      // }
    }

    return valid;
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.value : target.value;
    const name = target.name;
    console.log(`HandleInputChange is Running for ${name}`);

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.formValid()) {
      console.log("valid");
    } else {
      console.log("invalid");
    }
  };

  render() {
    return (
      <form className="form-b was-invalidated" onSubmit={this.handleSubmit}>
        <div className="form-group form-b__group">
          <label className="form-b__lable" for="project-input">
            Project Name
          </label>
          <input
            className={`form-control form-b__input ${
              this.state.isProjectValid ? "is-valid" : "is-invalid"
            }`}
            id="project-input"
            placeholder="Project Name"
            onChange={this.handleInputChange}
            value={this.state.projectName}
            name="projectName"
          />
          <Error errorMessage={this.state.formErrors.projectName} />
          <label for="email-input form-b__lable">Your Email Address</label>
          <input
            className={`form-control form-b__input ${
              this.state.isEmailValid ? "is-valid" : "is-invalid"
            }`}
            onChange={this.handleInputChange}
            placeholder="example@sportsbet.com.au"
            value={this.state.email}
            type="input"
            name="email"
          />
          <Error errorMessage={this.state.formErrors.email} />
        </div>

        <div className="form-group form-b__group">
          <label className="form-b__lable" for="question1">
            Subdomain/new domain: is this new content/feature located on a
            separate domain/subdomain
          </label>
          <select
            className={`form-control form-b__select ${
              this.state.isEmailValid ? "is-valid" : "is-invalid"
            }`}
            id="question1"
            onChange={this.handleInputChange}
            name="domain"
          >
            <option default className={"form-b__option--select"} value="">
              Select...
            </option>
            <option value="is located on separate subdomain/domain">
              is located on separate subdomain/domain
            </option>
            <option value="is NOT located on subdomain/domain">
              is NOT located on subdomain/domain{" "}
            </option>
          </select>
        </div>

        <div className="form-b__check-main">
          <label className="form-b__lable">Web Page URL</label>
          <div className=" form-check form-b__check custom-control custom-checkbox">
            <input
              className="form-check-input custom-control-input"
              type="checkbox"
              value="test"
              id="check1"
              onChange={this.handleInputChange}
              name="urlKeyword"
            />
            <label
              className="form-check-label form-b__check-lable custom-control-label "
              for="check1"
            >
              Make sure the new URL(s) are using keywords relevant to the page
            </label>
          </div>
          <div className=" form-check form-b__check custom-control custom-checkbox">
            <input
              className="form-check-input custom-control-input"
              type="checkbox"
              id="check2"
              onChange={this.handleInputChange}
              name="urlCapital"
              value={this.state.urlCapital}
            />
            <label
              className="form-check-label form-b__check-lable custom-control-label"
              for="check2"
            >
              URL is within the structure of the website category
            </label>
          </div>
          <div className=" form-check form-b__check custom-control custom-checkbox">
            <input
              className="form-check-input custom-control-input"
              type="checkbox"
              id="check3"
              onChange={this.handleInputChange}
              name="urlStrucutre"
              value={this.state.urlStrucutre}
            />
            <label
              className="form-check-label form-b__check-lable custom-control-label"
              for="check3"
            >
              URL doesn’t have capital letters or special symbols
            </label>
          </div>
        </div>

        <div className="form-group form-b__group mt-2">
          <label className="form-b__lable" for="question2">
            Rendering – confirm the web page is rendering fully for Search
            Engine Crawlers
          </label>
          <select
            className={`form-control form-b__select ${
              this.state.isProjectValid ? "is-valid" : "is-invalid"
            }`}
            id="question2"
            value={this.state.rendering}
            onChange={this.handleInputChange}
            name="rendering"
          >
            <option default className={"form-b__option--select"} value="">
              Select...
            </option>
            <option value="Feature is using client side rendering">
              Feature is using client side rendering
            </option>
            <option value="Feature is NOT using client side rendering">
              Feature is NOT using client side rendering
            </option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>

        <div className="form-b__check-main">
          <label className="form-b__lable">Meta Data</label>
          <div className=" form-check form-b__check custom-control custom-checkbox">
            <input
              className="form-check-input custom-control-input"
              type="checkbox"
              value={this.state.title}
              id="title"
              onChange={this.handleInputChange}
              name="title"
            />
            <label
              className="form-check-label form-b__check-lable custom-control-label"
              for="title"
            >
              Title tag requirements are fulfilled
            </label>
          </div>
          <div className=" form-check form-b__check custom-control custom-checkbox">
            <input
              className="form-check-input custom-control-input"
              type="checkbox"
              id="description"
              onChange={this.handleInputChange}
              name="description"
              value={this.state.description}
            />
            <label
              className="form-check-label form-b__check-lable custom-control-label"
              for="description"
            >
              Description tag requirements are fulfilled
            </label>
          </div>
          <div className=" form-check form-b__check custom-control custom-checkbox">
            <input
              className="form-check-input custom-control-input"
              type="checkbox"
              id="h1"
              onChange={this.handleInputChange}
              name="h1"
              value={this.state.h1}
            />
            <label
              className="form-check-label form-b__check-lable custom-control-label"
              for="h1"
            >
              Description tag requirements are fulfilled
            </label>
          </div>
        </div>

        <div className="form-group form-b__group mt-2">
          <label className="form-b__lable" for="schema">
            Schema Markups
          </label>
          <select
            className="form-check-input custom-control-input"
            // value={this.state.schema}
            onChange={this.handleInputChange}
            name="schema"
          >
            <option default className={"form-b__option--select"} value="">
              Select...
            </option>
            <option value="Schema Markups are implemeted">
              Schema Markups are implemeted
            </option>
            <option value="Schema Markups are NOT implemeted">
              Schema Markups are NOT implemeted
            </option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>

        <div className="form-group form-b__group mt-2">
          <label className="form-b__lable" for="pagespeed">
            Page Load Speed
          </label>
          <select
            className={`form-control form-b__select ${
              this.state.isEmailValid ? "is-valid" : "is-invalid"
            }`}
            id="pagespeed"
            value={this.state.pagespeed}
            onChange={this.handleInputChange}
            name="pagespeed"
          >
            <option default className={"form-b__option--select"} value="">
              Select...
            </option>
            <option value="Page load speed is considered as per overall Sportsbet standard">
              Page load speed is considered as per overall Sportsbet standard{" "}
            </option>
            <option
              value="Page load speed is NOT considered as per overall Sportsbet
              standard"
            >
              Page load speed is NOT considered as per overall Sportsbet
              standard{" "}
            </option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
        <div className="form-group form-b__group">
          <label for="content">
            SEO Team consulted in content related additions to make sure we
            optimise for search (ex: Stats and Insights)
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
