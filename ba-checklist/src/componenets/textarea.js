import React from "react";

function Textarea(props) {
  {
    return (
      <div className="form-group form-b__group">
        <label for="content">{props.label}</label>
        <textarea
          className="form-control form-b_text"
          id={props.id}
          rows="3"
          onChange={props.changeHandler}
          name={props.id}
          key={props.id}
        />
      </div>
    );
  }
}

export default Textarea;
