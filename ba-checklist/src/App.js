import React, { Component } from "react";
import "./App.css";
import Form from "./componenets/form";

class App extends Component {
  render() {
    return (
      <main className="container-fluid form-main">
        <h1 className="page-header form-main__header">
          {" "}
          SEO compatibility check{" "}
        </h1>
        <button
          type="button"
          className="btn btn-secondary mr-1 form-main__button"
        >
          Secondary
        </button>
        <button type="button" className="btn btn-secondary form-main__button">
          Secondary
        </button>

        <Form />
      </main>
    );
  }
}

export default App;
