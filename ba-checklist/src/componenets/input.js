import React from "react";
import Error from "./error.js";

function Inputfield(props) {
  return (
    <div className="form-b__input-container">
      <label className="form-b__lable">{props.inputLabel}</label>
      <input
        className={
          props.isValid
            ? `form-control form-b__input form-b__input--input`
            : "form-control form-b__input form-b__input--input is-invalid"
        }
        id={props.inputId}
        placeholder={props.inputPlaceholder}
        onChange={props.inputChange}
        name={props.inputId}
        tooltipmessage={props.tooltipmessage}
        onBlur={props.blurHadnler}
        value={props.value}
      />

      <Error errorMessage={props.errorMessage} />
    </div>
  );
}

export default Inputfield;
