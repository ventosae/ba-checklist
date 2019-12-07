import React, { Component } from "react";
import Fieldsgenerator from "./fields-generator.js";
import Button from "./button.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class FormWrapper extends Component {
  state = {};

  render() {
    return (
      <TransitionGroup component={null}>
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
              <h2 className="page-header page-header--h2">{this.props.name}</h2>
              <div className="form-group form-b__group" key="generator-div">
                <Fieldsgenerator
                  changeListener={this.props.onChange}
                  blurHadnler={this.props.validateOnBlur}
                  values={this.props.values}
                />
              </div>
              <Button
                show={this.props.button}
                sbumitHandler={this.props.submitHandlerProps}
                buttonText="Submit"
              />
            </div>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default FormWrapper;
