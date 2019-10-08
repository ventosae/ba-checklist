import React, { Component } from "react";

class AppSelector extends Component {
  state = { formTitle: "Project Checklist" };
  render() {
    let render = this.props.render;
    if (!render) {
      return null;
    } else {
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
              >
                CXP Web
              </button>
              <button
                type="button"
                className="btn btn btn-outline-info form-main__button"
              >
                APP
              </button>
            </div>
          </div>
        </section>
      );
    }
  }
}

export default AppSelector;
