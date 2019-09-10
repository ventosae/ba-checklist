import React, { Component } from "react";
import Error from "./error.js";

class Selectfield extends Component {
  state = {};

  render() {
    return (
      <div className="form-group form-b__group">
        <label className="form-b__lable" for="question1">
          Subdomain/new domain: is this new content/feature located on a
          separate domain/subdomain
        </label>
        <select
          className={`form-control form-b__select ${
            this.state.isEmailValid ? "" : "is-invalid"
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
        <Error errorMessage={this.state.formErrors.domain} />
      </div>
    );
  }
}

export default Selectfield;
