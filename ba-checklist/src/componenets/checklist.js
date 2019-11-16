import React from "react";
import Info from "./info.js";

function Checklistfield(props) {
  {
    const options = props.options;
    return (
      <div className="form-b__check-main" key={props.inputLabel + "div"}>
        <label className="form-b__lable">{props.inputLabel}</label>
        {options.map(option => (
          <React.Fragment key={option.optionState + "key"}>
            <span key={props.inputLabel} className="tooltips-checklist">
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
                  value={props.value}
                />

                <label
                  className="form-check-label form-b__check-lable form-b__check-lable--checklist custom-control-label "
                  htmlFor={option.optionState}
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
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Checklistfield;
