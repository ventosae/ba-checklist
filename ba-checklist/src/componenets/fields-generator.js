import React from "react";
import Selectfield from "./select.js";
import Checklistfield from "./checklist.js";
import Textarea from "./textarea.js";
import Inputfield from "./input.js";

function Fieldsgenerator(props) {
  const values = props.values;
  const changeListener = props.changeListener;
  const blurHadnler = props.blurHadnler;
  return values.map(value => {
    if (value.type === "select") {
      return (
        <Selectfield
          key={value.inputId + "key"}
          options={value.options}
          inputLabel={value.inputLabel}
          inputId={value.inputId}
          inputChange={changeListener}
          errorMessage={value.errorMessage}
          //classes cold be .tooltip-good / .tooltip-bad / .tooltip-comment
          tooltipmessage={value.tooltip}
          value={value.value}
          isValid={value.isValid}
          blurHadnler={blurHadnler}
        />
      );
    } else if (value.type === "textarea") {
      return (
        <Textarea
          label={value.label}
          inputId={value.inputId}
          key={value.inputId + "key"}
          changeHandler={changeListener}
          value={value.value}
        />
      );
    } else if (value.type === "checklist") {
      return (
        <Checklistfield
          key={value.label + "key"}
          options={value.options}
          inputLabel={value.label}
          inputChange={changeListener}
          tooltipmessage={value.tooltip}
          inputId={value.inputId}
        />
      );
    } else if (value.type === "input") {
      return (
        <Inputfield
          key={value.inputId + "key"}
          inputChange={changeListener}
          inputLabel={value.label}
          inputId={value.inputId}
          inputPlaceholder={value.inputPlaceholder}
          errorMessage={value.errorMessage}
          blurHadnler={blurHadnler}
          value={value.value}
          isValid={value.isValid}
        />
      );
    }
  });
}

export default Fieldsgenerator;
