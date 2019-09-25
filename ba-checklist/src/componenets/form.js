import React, { Component } from "react";
import ChecklistForm from "./checklistForm.js";
import ProjectInfo from "./projectInfo.js";
import AppSelector from "./appselector.js";

class Form extends Component {
  render() {
    return (
      <>
        <ProjectInfo />
        <AppSelector />
        <ChecklistForm />
      </>
    );
  }
}

export default Form;
