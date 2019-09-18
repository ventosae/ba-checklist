import React, { Component } from "react";
import Btn from "./btn";
import Tooltip from "./tooltip";

class Tooltipmain extends Component {
  constructor(props) {
    super(props);

    this.setupRefs();

    this.setupEvents();
  }
  setupRefs() {
    this.toolTip = React.createRef();
  }
  setupEvents() {
    this.createBtn = this.createBtn.bind(this);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
  }
  handleOnMouseOut(evt) {}
  handleOnMouseOver(evt) {}
  createBtn(id, text) {
    var { handleOnMouseOver, handleOnMouseOut } = this;

    return (
      <Btn
        id={id}
        onMouseOver={handleOnMouseOver}
        onMouseOut={handleOnMouseOut}
      >
        {text}
      </Btn>
    );
  }
  render() {
    let { createBtn } = this;

    return (
      <div>
        {createBtn("btnLeft", "click 1")}
        {createBtn("btnRight", "click 2")}
        {createBtn("btnBtmR", "click 3")}
        {createBtn("btnCenter", "click 4")}
        <Tooltip ref={this.toolTip} />
      </div>
    );
  }
  componentDidMount() {}
}

export default Tooltipmain;
