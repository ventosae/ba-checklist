import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Button from "./button.js";

class Textblock extends Component {
  render() {
    return (
      <TransitionGroup component={null}>
        <CSSTransition
          classNames="fade"
          timeout={800}
          in={true}
          appear={true}
          exit
        >
          <section className="form-main__wrapper-m form-main__wrapper--form">
            <div className="form-main__wrapper-m__second">
              <h2 className="page-header page-header--h2">
                {this.props.formTitle}
              </h2>
              <p className="form-main__text">{this.props.text}</p>
              <Button
                show={this.props.showButton}
                sbumitHandler={this.props.sbumitHandler}
                buttonText={this.props.buttonText}
              />
            </div>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Textblock;
