import React, { Component } from "react";
import "../App.css";
import Fieldsgenerator from "./fields-generator.js";
import Submitbutton from "./submit-button.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Inputsform extends Component {
  render() {
    const inputValues = this.props.inputValues;
    return (
      <TransitionGroup component={null}>
        <CSSTransition classNames="fade" timeout={800} in={true} appear={true}>
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
              <Submitbutton
                show={this.props.submitButton}
                sbumitHandler={this.props.sbumitHandler}
              />
            </div>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Inputsform;
