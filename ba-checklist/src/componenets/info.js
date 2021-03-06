import React, { Component } from "react";
import { MdInfo } from "react-icons/md";
import ToolTip from "./tooltip";
import { IoIosInformation } from "react-icons/io";

class Info extends Component {
  events = {};

  // can we do it without consturctor at all?

  constructor(props) {
    super(props);

    this.setupRefs();
  }
  setupRefs = () => {
    this.toolTip = React.createRef();
  };

  handleOnMouseOut = () => {
    this.toolTip.current.hide();
  };

  handleOnMouseOver = evt => {
    let el = evt.currentTarget;
    if (el != null) {
      let rect = el.getBoundingClientRect();
      this.toolTip.current.show(rect);
    }
  };

  render() {
    let toolTipType = this.props.type;
    let icon;
    if (toolTipType === "checklist") {
      icon = (
        <IoIosInformation
          className="info-icon info-icon--checklist"
          id={this.props.id}
          key={this.props.id}
          onMouseOver={this.handleOnMouseOver}
          onMouseLeave={this.handleOnMouseOut}
          tooltiptextvalue={this.props.tooltiptextvalue}
        />
      );
    } else {
      icon = (
        <MdInfo
          className="info-icon"
          id={this.props.id}
          key={this.props.id}
          onMouseOver={this.handleOnMouseOver}
          onMouseLeave={this.handleOnMouseOut}
          tooltiptextvalue={this.props.tooltiptextvalue}
        />
      );
    }

    return (
      <>
        {icon}
        <ToolTip
          ref={this.toolTip}
          key={this.props.tooltiptextvalue}
          tooltiptext={this.props.tooltiptextvalue}
        />
      </>
    );
  }
  componentDidMount() {} // again, sorry im a bit stupid when it comes to components' lifecycle - is this for perf?
}

export default Info;
