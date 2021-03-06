import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class AppSelector extends Component {
  state = { formTitle: "Project Checklist" };
  render() {
    const renderApp = this.props.renderApp;
    return (
      <TransitionGroup component={null}>
        {renderApp ? (
          <CSSTransition
            classNames="fade"
            unmountOnExit
            timeout={800}
            appear={true}
            enter={true}
            exit={true}
            in={true}
          >
            <section className="form-main__wrapper-m form-main__wrapper--form">
              <div className="form-main__wrapper-m__second">
                <h2 className="page-header page-header--h2">
                  {this.state.formTitle}
                </h2>
                <div className="form-main__wrapper--button">
                  <button
                    type="button"
                    className="btn btn btn-outline-info mr-1 form-main__button"
                    id="web"
                    onClick={this.props.tabChangeHandler}
                  >
                    CXP Web
                  </button>
                  <button
                    type="button"
                    className="btn btn btn-outline-info form-main__button"
                    id="app"
                    onClick={this.props.tabChangeHandler}
                  >
                    APP
                  </button>
                </div>
              </div>
            </section>
          </CSSTransition>
        ) : null}
      </TransitionGroup>
    );
  }
}

export default AppSelector;
