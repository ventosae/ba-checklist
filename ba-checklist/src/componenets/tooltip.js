import React, { Component } from "react";
import "../App.css";

class ToolTip extends Component {
  state = {};
  render() {
    let { state } = this;

    return (
      <div id="tooltip" className="on right">
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner">ToolTip Component</div>
      </div>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default ToolTip;
