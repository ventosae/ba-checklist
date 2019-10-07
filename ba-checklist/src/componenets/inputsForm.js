import React, { Component } from "react";
import "../App.css";
import Fieldsgenerator from "./fields-generator.js";
import Submitbutton from "./submit-button.js";

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
          <Submitbutton
            show={this.props.submitButton}
            sbumitHandler={this.props.sbumitHandler}
          />
        </div>
      </section>
    );
  }
}

export default Inputsform;
