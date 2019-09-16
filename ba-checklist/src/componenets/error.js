import React, { Component } from "react";

class Error extends Component {
  render() {
    return <p className="invalid-feedback">{this.props.errorMessage}</p>;
  }
}

export default Error;
