import React from "react";

function Textarea(props) {
  return (
    <div className="form-group form-b__group form-b__group__textarea">
      <label>{props.label}</label>
      <textarea
        className="form-control form-b_text"
        id={props.inputId}
        rows="3"
        onChange={props.changeHandler}
        name={props.id}
        key={props.id}
        value={props.value}
      />
    </div>
  );
}

export default Textarea;
