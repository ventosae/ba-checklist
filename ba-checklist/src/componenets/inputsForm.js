import React, { Component } from "react";
import "../App.css";
import Fieldsgenerator from "./fields-generator.js";
import Button from "./button.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Inputsform extends Component {
  render() {
    const inputValues = this.props.inputValues;
    const renderInputForm = this.props.renderInputForm;
    return (
      <TransitionGroup component={null}>
        {renderInputForm ? (
          <CSSTransition
            classNames="fade"
            timeout={800}
            appear={true}
            enter={true}
            exit={true}
            in={true}
          >
            <section className="form-main__wrapper-m form-main__wrapper--form">
              <div className="form-main__wrapper-m__second">
                <h2 className="page-header page-header--h2">
                  {this.props.formTitle}
                </h2>
                <div className="form-group form-b__group" key="generator-div">
                  <Fieldsgenerator
                    changeListener={this.props.changeListener}
                    blurHadnler={this.props.blurHadnler}
                    values={inputValues}
                  />
                </div>
                <Button
                  show={this.props.submitButton}
                  sbumitHandler={this.props.sbumitHandler}
                  buttonText="Submit"
                />
              </div>
            </section>
          </CSSTransition>
        ) : null}
      </TransitionGroup>
    );
  }
}

export default Inputsform;
