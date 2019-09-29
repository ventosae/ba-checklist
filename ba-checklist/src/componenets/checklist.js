import React from "react";
import Info from "./info.js";

function Checklistfield(props) {
  {
    const options = props.options;
    return (
      <div className="form-b__check-main">
        <label className="form-b__lable">{props.inputLabel}</label>
        {options.map(option => (
          <>
            <span className="tooltips-checklist">
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
                  className="form-check-label form-b__check-lable form-b__check-lable--checklist custom-control-label "
                  for={option.optionState}
                >
                  {option.optionLabel}
                </label>
              </div>

              <Info
                id={option.optionLabel}
                tooltiptextvalue={option.tooltiptext}
                type="checklist"
              />
            </span>
          </>
        ))}
      </div>
    );
  }
}

export default Checklistfield;
