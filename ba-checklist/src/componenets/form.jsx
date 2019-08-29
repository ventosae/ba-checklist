import React, { Component } from "react";

class Form extends Component {
  state = {
    projectName: " ",
    email: " "
  };

  handleInputChange = event => {
    this.setState({
      projectName: event.target.value
    });
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  render() {
    return (
      <form className="form-b">
        <div class="form-group form-b__group">
          <label className="form-b__lable" for="project-input">
            Project Name
          </label>
          <input
            class="form-control form-b__input"
            id="project-input"
            placeholder="Project Name"
            onChange={this.handleInputChange}
            value={this.state.projectName}
          />
          <label for="email-input form-b__lable">Your Email Address</label>
          <input
            class="form-control form-b__input"
            id="email-input"
            onChange={this.handleEmailChange}
            placeholder="example@sportsbet.com.au"
            value={this.state.email}
            type="email"
          />
        </div>

        <div class="form-group form-b__group">
          <label className="form-b__lable" for="question1">
            Subdomain/new domain: is this new content/feature located on a
            separate domain/subdomain
          </label>
          <select class="form-control form-b__select" id="question1">
            <option>is located on separate subdomain/domain</option>
            <option>is NOT located on subdomain/domain </option>
          </select>
        </div>

        <div className="form-b__check-main">
          <label className="form-b__lable">Web Page URL</label>
          <div className="form-check form-b__check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="check1"
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
              value=""
              id="check2"
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
              value=""
              id="check3"
            />
            <label
              className="form-check-label form-b__check-lable"
              for="check3"
            >
              URL doesn’t have capital letters or special symbols
            </label>
          </div>
        </div>

        <div class="form-group form-b__group">
          <label for="exampleFormControlSelect2 form-b__lable">
            Question 2 multiple
          </label>
          <select
            multiple
            class="form-control form-b__select"
            id="exampleFormControlSelect2"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group form-b__group">
          <label for="exampleFormControlTextarea1 form-b__lable">
            Example textarea
          </label>
          <textarea
            class="form-control form-b_text"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
      </form>
    );
  }
}

export default Form;
