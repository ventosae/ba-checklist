import React, { Component } from "react";

class AppSelector extends Component {
  state = { formTitle: "Project Checklist" };
  render() {
    return (
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
    );
  }
}

export default AppSelector;
