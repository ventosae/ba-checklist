import React, { Component } from "react";

class Form extends Component {
  state = {
    projectName: "",
    email: "",
    domain: "",
    urlKeyword: "",
    urlStrucutre: "",
    urlCapital: "",
    rendering: "",
    title: "",
    description: "",
    h1: "",
    schema: "",
    pagespeed: "",
    content: ""
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form
        className="form-b"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className="form-group form-b__group">
          <label className="form-b__lable" for="project-input">
            Project Name
          </label>
          <input
            className="form-control form-b__input"
            id="project-input"
            placeholder="Project Name"
            onChange={this.handleInputChange}
            value={this.state.projectName}
            name="projectName"
          />
          <label for="email-input form-b__lable">Your Email Address</label>
          <input
            className="form-control form-b__input"
            id="email-input"
            onChange={this.handleInputChange}
            placeholder="example@sportsbet.com.au"
            value={this.state.email}
            type="email"
            name="email"
          />
        </div>

        <div className="form-group form-b__group">
          <label className="form-b__lable" for="question1">
            Subdomain/new domain: is this new content/feature located on a
            separate domain/subdomain
          </label>
          <select
            className="form-control form-b__select"
            id="question1"
            value={this.state.domain}
            onChange={this.handleInputChange}
            name="domain"
          >
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
          <div className="form-check form-b__check">
            <input
              className="form-check-input"
              type="checkbox"
              value={this.state.urlKeyword}
              id="check1"
              onChange={this.handleInputChange}
              name="urlKeyword"
            />
            <label
              className="form-check-label form-b__check-lable"
              for="check1"
            >
              Make sure the new URL(s) are using keywords relevant to the page
            </label>
          </div>
          <div className="form-check form-b__check">
            <input
              className="form-check-input"
              type="checkbox"
              id="check2"
              onChange={this.handleInputChange}
              name="urlCapital"
              value={this.state.urlCapital}
            />
            <label
              className="form-check-label form-b__check-lable"
              for="check2"
            >
              URL is within the structure of the website category
            </label>
          </div>
          <div className="form-check form-b__check">
            <input
              className="form-check-input"
              type="checkbox"
              id="check3"
              onChange={this.handleInputChange}
              name="urlStrucutre"
              value={this.state.urlStrucutre}
            />
            <label
              className="form-check-label form-b__check-lable"
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
            className="form-control form-b__select"
            id="question2"
            value={this.state.rendering}
            onChange={this.handleInputChange}
            name="rendering"
          >
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
          <div className="form-check form-b__check">
            <input
              className="form-check-input"
              type="checkbox"
              value={this.state.title}
              id="title"
              onChange={this.handleInputChange}
              name="title"
            />
            <label className="form-check-label form-b__check-lable" for="title">
              Title tag requirements are fulfilled
            </label>
          </div>
          <div className="form-check form-b__check">
            <input
              className="form-check-input"
              type="checkbox"
              id="description"
              onChange={this.handleInputChange}
              name="description"
              value={this.state.description}
            />
            <label
              className="form-check-label form-b__check-lable"
              for="description"
            >
              Description tag requirements are fulfilled
            </label>
          </div>
          <div className="form-check form-b__check">
            <input
              className="form-check-input"
              type="checkbox"
              id="h1"
              onChange={this.handleInputChange}
              name="h1"
              value={this.state.h1}
            />
            <label className="form-check-label form-b__check-lable" for="h1">
              Description tag requirements are fulfilled
            </label>
          </div>
        </div>

        <div className="form-group form-b__group mt-2">
          <label className="form-b__lable" for="schema">
            Schema Markups
          </label>
          <select
            className="form-control form-b__select"
            id="schema"
            value={this.state.schema}
            onChange={this.handleInputChange}
            name="schema"
          >
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
            className="form-control form-b__select"
            id="pagespeed"
            value={this.state.pagespeed}
            onChange={this.handleInputChange}
            name="pagespeed"
          >
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
