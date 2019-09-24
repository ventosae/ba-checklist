import React from "react";
import Error from "./error.js";
import Info from "./info.js";

function Inputfield(props) {
  {
    return (
      <div className="form-b__input-container">
        <label className="form-b__lable" for="project-input">
          {props.inputLabel}
        </label>
        <input
          className={`form-control form-b__input form-b__input--input ${
            props.isInputValid ? "" : "is-invalid"
          }`}
          id={props.inputId}
          placeholder={props.inputPlaceholder}
          onChange={props.inputChange}
          name={props.inputId}
          tooltipmessage={props.tooltipmessage}
        />
        {/* <Info id={props.inputId} tooltiptextvalue={props.tooltipmessage} /> */}
        <Error errorMessage={props.errorMessage} />
      </div>
    );
  }
}

export default Inputfield;
