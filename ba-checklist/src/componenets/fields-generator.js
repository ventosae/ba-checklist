import React from "react";
import Selectfield from "./select.js";
import Checklistfield from "./checklist.js";
import Textarea from "./textarea.js";
import Inputfield from "./input.js";

function Fieldsgenerator(props) {
  const selectChecklistFlag = props.selectChecklistFlag;
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
        />
      );
    } else if (value.type === "textarea") {
      return (
        <Textarea
          label={value.label}
          id={value.id}
          key={value.id + "key"}
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
          value={value.value}
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
    } else if (value.type === "select+checklist") {
      return (
        <>
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
          />
          {selectChecklistFlag ? (
            <Checklistfield
              key={value.labelChecklist + "key"}
              options={value.optionChecklist}
              inputLabel={value.labelChecklist}
              inputChange={changeListener}
              tooltipmessage={value.tooltipChecklist}
              value={value.value}
            />
          ) : null}
        </>
      );
    }
  });
}

export default Fieldsgenerator;
