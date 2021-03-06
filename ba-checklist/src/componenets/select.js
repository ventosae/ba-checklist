import React from "react";
import Error from "./error.js";
import Info from "./info.js";

function Selectfield(props) {
  {
    const options = props.options;
    return (
      <div
        key={props.inputId}
        className="form-group form-b__group form-b__group--select"
      >
        <label className="form-b__lable">{props.inputLabel}</label>
        <select
          className={
            props.isValid
              ? "form-control form-b__select"
              : "form-control form-b__select is-invalid"
          }
          id={props.inputId}
          onChange={props.inputChange}
          name={props.inputId}
          tooltipmessage={props.tooltipmessage}
          value={props.value}
          onBlur={props.blurHadnler}
        >
          <option default className={"form-b__option--select"} value="">
            Select...
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Info
          id={props.inputId}
          tooltiptextvalue={props.tooltipmessage}
          type="select"
        />
        <Error errorMessage={props.errorMessage} />
      </div>
    );
  }
}

export default Selectfield;
