import React, { Component } from "react";
import "./App.css";
import { Helmet } from "react-helmet";
import Logo from "./componenets/sportsbet_logo.png";
import Form from "./componenets/form.js";

class App extends Component {
  render() {
    return (
      <main className="container-fluid form-main">
        <Helmet
          bodyAttributes={{
            style:
              "background: linear-gradient(to bottom, #00549E, #1C75BC); min-height: 100vh;"
          }}
          title="BA SEO Checklist - SEO Team"
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

        <Form />
      </main>
    );
  }
}

export default App;
