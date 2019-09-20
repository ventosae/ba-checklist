import React, { Component } from "react";
import ReactDOM from "react-dom";

class ToolTip extends Component {
  state = { visible: false, x: 0, y: 0, type: "none" };

  render() {
    let { state } = this;

    let visibility = state.visible == true ? "on" : "off";

    let style = {
      left: state.x + window.scrollX + "px",
      top: state.y + window.scrollY + "px"
    };

    let classNames = {};

    if (state.type != null && state.type != "none") {
      classNames[state.type] = true;
    }

    classNames[visibility] = true;

    return (
      <div
        id="tooltip"
        style={style}
        className={`tooltip-fade ${Object.keys(classNames).join(" ")}`}
      >
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner">
          <span className="tooltip-good">{this.props.goodexample}</span>
          <span className="tooltip-bad">{this.props.badexample}</span>
          <span className="tooltip-regular">{this.props.tolltipcomment}</span>
        </div>
      </div>
    );
  }
  componentDidMount() {} // why do we need this
  componentWillUnmount() {} // why do we need this

  show(hoverRect) {
    let { pastShow } = this;
    console.log(hoverRect);

    // setState will execute the pastShow with hoverRect as the tool tip becomes visible
    this.setState({ visible: true }, pastShow.bind(this, hoverRect));
  }

  hide() {
    this.setState({ visible: false });
  }

  pastShow(hoverRect) {
    // position the tooltip after showing it
    let ttNode = ReactDOM.findDOMNode(this); // anton: is it still relevant

    if (ttNode != null) {
      let x = 0,
        y = 0;

      const docWidth = document.querySelector(".form-main__wrapper-m")
          .clientWidth,
        docHeight = document.querySelector(".form-b__group").clientHeight;

      console.log(document.documentElement.clientWidth);

      let rx = hoverRect.x + hoverRect.width, // most right x
        lx = hoverRect.x, // most left x
        ty = hoverRect.y, // most top y
        by = hoverRect.y + hoverRect.height; // most bottom y

      // tool tip rectange
      let ttRect = ttNode.getBoundingClientRect();

      console.log(ttRect);

      let bRight = rx + ttRect.width <= window.scrollX + docWidth;
      let bLeft = lx - ttRect.width >= 0;

      let bAbove = ty - ttRect.height >= 0;
      let bBellow = by + ttRect.height <= window.scrollY + docHeight;

      let newState = {};

      // the tooltip doesn't fit to the right
      if (bRight) {
        x = rx;

        y = ty + (hoverRect.height - ttRect.height);

        if (y < 0) {
          y = ty;
        }

        newState.type = "right";
      } else if (bBellow) {
        y = by;

        x = lx + (hoverRect.width - ttRect.width);

        if (x < 0) {
          x = lx;
        }

        newState.type = "bottom";
      } else if (bLeft) {
        x = lx - ttRect.width;

        y = ty + (hoverRect.height - ttRect.height) + 20;

        if (y < 0) {
          y = ty;
        }

        newState.type = "left";
      } else if (bAbove) {
        y = ty - ttRect.height;

        x = lx + (hoverRect.width - ttRect.width);

        if (x < 0) {
          x = lx;
        }

        newState.type = "top";
      }

      newState = { ...newState, x: x, y: y };

      this.setState(newState);
    }
  }
}

export default ToolTip;