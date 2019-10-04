import React, { Component } from "react";
import "../App.css";
import Fieldsgenerator from "./fields-generator.js";

class Inputsform extends Component {
  render() {
    const inputValues = this.props.inputValues;
    return (
      <section className="form-main__wrapper-m form-main__wrapper--form">
        <div className="form-main__wrapper-m__second">
          <h2 className="page-header page-header--h2">
            {this.props.formTitle}
          </h2>
          <div className="form-group form-b__group">
            <Fieldsgenerator
              changeListener={this.props.changeListener}
              values={inputValues}
            />
          </div>
        </div>{" "}
        <button type="submit" className="btn btn-primary form-main__button">
          Submit
        </button>
      </section>
    );
  }
}

export default Inputsform;
