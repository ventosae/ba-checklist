import React, { Component } from "react";
import { MdInfo } from "react-icons/md";
import Tooltip from "./tooltip";

class Info extends Component {
  events = {};

  // can we do it without consturctor at all?

  constructor(props) {
    super(props);

    this.setupRefs();
  }
  setupRefs() {
    this.toolTip = React.createRef();
  }

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
    return (
      <>
        <MdInfo
          className="info-icon"
          id={this.props.id}
          onMouseOver={this.handleOnMouseOver}
          onMouseLeave={this.handleOnMouseOut}
          tooltiptext={this.props.tooltiptext}
          key={this.props.id}
        />
        <Tooltip ref={this.toolTip} ttext={this.props.tooltiptext} />
      </>
    );
  }
  componentDidMount() {} // again, sorry im a bit stupid when it comes to components' lifecycle - is this for perf?
}

export default Info;
