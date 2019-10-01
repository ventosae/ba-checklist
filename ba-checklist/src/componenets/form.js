import React, { Component } from "react";
import ChecklistForm from "./checklistForm.js";
import ProjectInfo from "./projectInfo.js";
import AppSelector from "./appselector.js";

class Form extends Component {
  render() {
    const formElem = [
      {
        inputChange: this.handleInputChange,
        projectName: {
          inputLabel: "Project Name",
          isInputValid: "true",
          inputId: "projectName",
          inputPlaceholder: "Project Name"
        }
      }
    ];

    return (
      <>
        <ProjectInfo type="1" value={formElem} />
        <AppSelector />
        <ChecklistForm />
      </>
    );
  }
}

export default Form;
