import React, { Component } from "react";

function Submitbutton(props) {
  const show = props.show;
  if (!show) {
    return null;
  } else {
    return (
      <button
        type="submit"
        onClick={props.sbumitHandler}
        className="btn btn-primary form-main__button"
      >
        Submit
      </button>
    );
  }
}

export default Submitbutton;
