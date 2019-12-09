import React from "react";

function Button(props) {
  const show = props.show;

  if (!show) {
    return null;
  } else {
    return (
      <button
        type="submit"
        onClick={props.sbumitHandler}
        className="btn btn-primary form-main__button form-main__button--submit"
      >
        {props.buttonText}
      </button>
    );
  }
}

export default Button;
