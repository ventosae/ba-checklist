import React from "react";
import Selectfield from "./select.js";
import Checklistfield from "./checklist.js";
import Textarea from "./textarea.js";
import Inputfield from "./input.js";

function Fieldsgenerator(props) {
  const values = props.values;
  const changeListener = props.changeListener;
  const blurHadnler = props.blurHadnler;
  const isInputValid = props.isInputValid;
  return values.map(value => {
    if (value.type === "select") {
      return (
        <Selectfield
          options={value.options}
          inputLabel={value.inputLabel}
          isInputValid={isInputValid}
          inputId={value.inputId}
          inputChange={changeListener}
          errorMessage={value.errorMessage}
          //classes cold be .tooltip-good / .tooltip-bad / .tooltip-comment
          tooltipmessage={value.tooltip}
        />
      );
    } else if (value.type === "textarea") {
      return (
        <Textarea
          label={value.label}
          id={value.id}
          changeHandler={changeListener}
        />
      );
    } else if (value.type === "checklist") {
      return (
        <Checklistfield
          options={value.options}
          inputLabel={value.label}
          inputChange={changeListener}
          tooltipmessage={value.tooltip}
        />
      );
    } else if (value.type === "input") {
      return (
        <Inputfield
          inputChange={changeListener}
          inputLabel={value.label}
          isInputValid={isInputValid}
          inputId={value.inputId}
          inputPlaceholder={value.inputPlaceholder}
          errorMessage={value.errorMessage}
          blurHadnler={blurHadnler}
        />
      );
    }
  });
}

export default Fieldsgenerator;
