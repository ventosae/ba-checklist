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
    let tooltipText = this.props.tooltiptext;

    return (
      <div
        id="tooltip"
        style={style}
        key={this.props.key}
        className={`tooltip-fade ${Object.keys(classNames).join(" ")}`}
      >
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner">
          {tooltipText.map(text => (
            <>
              <span className={text.class}>{text.tooltipComment}</span>
            </>
          ))}
        </div>
      </div>
    );
  }
  componentDidMount() {} // why do we need this
  componentWillUnmount() {} // why do we need this

  show(hoverRect) {
    let { pastShow } = this;
    // setState will execute the pastShow with hoverRect as the tool tip becomes visible
    this.setState({ visible: true }, pastShow.bind(this, hoverRect));
  }

  hide() {
    this.setState({ visible: false });
  }

  pastShow(hoverRect) {
    console.log("1 hoverRect", hoverRect);
    // position the tooltip after showing it
    let ttNode = ReactDOM.findDOMNode(this); // anton: is it still relevant
    console.log("2 ttNode - finddomenode", ttNode);
    if (ttNode != null) {
      let x = 0,
        y = 0;

      const docWidth = document.querySelector(".form-main__wrapper-m")
          .clientWidth,
        docHeight = 25;

      console.log("3 width", docWidth);
      console.log("4 height", docHeight);

      // document.documentElement.clientHeight

      let rx = hoverRect.x + hoverRect.width, // most right x
        lx = hoverRect.x, // most left x
        ty = hoverRect.y + 5, // most top y
        by = hoverRect.y + hoverRect.height; // most bottom y

      console.log("5 hoverRect.width", hoverRect.width);
      console.log("6 hover rect height", hoverRect.height);
      // tool tip rectange
      let ttRect = ttNode.getBoundingClientRect();

      console.log("7 getBoundingClientRect", ttRect);

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

        y = ty + (hoverRect.height - ttRect.height);

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
