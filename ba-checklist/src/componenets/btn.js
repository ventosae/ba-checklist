import React, { Component } from "react";
import Tooltip from "./tooltip";

class Btn extends Component {
  events = {};
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      text: props.children
    };
  }
  render() {
    return (
      <>
        <Tooltip />
        <button type="button" id={this.state.id}>
          {this.state.text}
        </button>
      </>
    );
  }
}

export default Btn;
