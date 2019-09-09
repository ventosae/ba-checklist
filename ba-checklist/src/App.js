import React, { Component } from "react";
import "./App.css";
import Form from "./componenets/form.js";
import { Helmet } from "react-helmet";
import Logo from "./componenets/sportsbet_logo.png";
import Bstroke from "./componenets/brush_stroke.png";

class App extends Component {
  render() {
    return (
      <main className="container-fluid form-main">
        <Helmet
          bodyAttributes={{
            style:
              "background: linear-gradient(to bottom, #00549E, #1C75BC); min-height: 100vh;"
          }}
        />
        <div className="form-main__header-container">
          <img
            src={Logo}
            alt="sportsbet logo"
            className="form-main_header-image"
          />
        </div>
        <div className="page-header--wrapper">
          <h1 className="page-header">
            {" "}
            SEO compatibility <br></br>check{" "}
          </h1>
        </div>
        <div className="form-main__wrapper-m">
          <div className="form-main__wrapper-m__second">
            <div className="form-main__wrapper">
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

            <Form />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
