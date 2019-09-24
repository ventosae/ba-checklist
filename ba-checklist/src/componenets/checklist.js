import React from "react";
import Info from "./info.js";

function Checklistfield(props) {
  {
    const options = props.options;
    return (
      <div className="form-b__check-main">
        <label className="form-b__lable">{props.inputLabel}</label>
        {options.map(option => (
          <div
            className=" form-check form-b__check custom-control custom-checkbox"
            key={option.optionState}
          >
            <input
              className="form-check-input custom-control-input"
              type="checkbox"
              onChange={props.inputChange}
              name={option.optionState}
              id={option.optionState}
            />

            <label
              className="form-check-label form-b__check-lable custom-control-label "
              for={option.optionState}
            >
              {option.optionLabel}
            </label>
            {/* <Info
              id={option.optionLabel}
              tooltiptextvalue={option.optionLabel}
            /> */}
          </div>
        ))}
      </div>
    );
  }
}

export default Checklistfield;
