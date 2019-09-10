import React, { Component } from "react";

class Error extends Component {
  render() {
    return <div className="invalid-feedback">{this.props.errorMessage}</div>;
  }
}

export default Error;
