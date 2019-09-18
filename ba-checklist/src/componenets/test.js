import React, { Component } from "react";

class Test extends Component {
  state = {
    message: "test"
  };

  clickHandler = () => {
    this.setState({
      message: "goodbye"
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button
          onClick={this.clickHandler}
          className="btn btn-primary form-main__button"
        >
          {" "}
          Click{" "}
        </button>
      </div>
    );
  }
}

export default Test;
