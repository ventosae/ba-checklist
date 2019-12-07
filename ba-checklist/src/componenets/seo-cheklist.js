import React, { Component } from "react";
import Inputsform from "./inputsForm.js";
import AppSelector from "./appselector.js";
import {
  inputValuesForProject,
  inputValuesForChecklist,
  inputValuesForAppChecklist,
  defaultState
} from "./formData.js";
import Appchecklist from "./appChecklist";
import Textblock from "./textBlock";
import FormWrapper from "./formWrapper.js";

const FormFields = inputValuesForProject;
const urlSlack =
  "https://hooks.slack.com/services/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";

class SeoChecklist extends Component {
  state = {
    data: FormFields
  };

  getName = () => {
    const userName = this.state.email.split(".").shift();
    this.setState({ name: userName });
  };

  stateDefaultHandler = () => {
    this.setState(defaultState);
  };

  tabHandler = event => {
    let eventId = event.target.id;
    this.setState({ renderChecklist: eventId });
  };

  updateInputs(ev) {
    let result;
    result = this.state.data.map(item => {
      if (ev.target.id === item.inputId) {
        const updatedItem = { ...item, value: ev.target.value };

        return updatedItem;
      } else {
        return item;
      }
    });

    return result;
  }

  onChange = ev => {
    ev.stopPropagation();
    let updatedState;
    if (ev.target.type !== "checkbox") {
      updatedState = this.updateInputs(ev);
    } else {
      const checkListSelection = this.state.data.filter(
        item => item.type === "checklist"
      );
      let checkList = checkListSelection.find(
        item => item.inputId === ev.target.parentElement.id
      );
      const triggeredCheckBox = checkList.options.find(
        item => item.id === ev.target.id
      );
      const updatedCheckbox = {
        ...triggeredCheckBox,
        checked: !triggeredCheckBox.checked
      };
      const checkboxIndex = checkList.options.findIndex(
        item => item.id === ev.target.id
      );
      checkList.options[checkboxIndex] = updatedCheckbox;
      const checklistIndex = this.state.data.findIndex(
        item => item.inputId === checkList.inputId
      );
      const updatedData = this.state.data;
      updatedData[checklistIndex] = checkList;
      updatedState = updatedData;
    }
    this.setState({ data: updatedState });
  };

  emailValid(key) {
    let emailValue = key;
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    let result = emailRegex.test(key);
    if (result) {
      let userName = emailValue.split(".").shift();
      this.setState({ name: userName });
    }
    return result;
  }

  mapData = (mapThrough, eventId, result) => {
    let mapResult = mapThrough.map(item => {
      if (item.inputId === eventId) {
        return { ...item, isValid: result };
      }
      return item;
    });
    return mapResult;
  };

  validate = event => {
    event.preventDefault();
    let targetType = event.target.type;
    let eventId = event.target.name;
    let valid = true;

    const fields = this.state.data;
    if (targetType === "text") {
      let currentObject = fields.filter(item => {
        return item.inputId === eventId;
      });

      let inputValueText = currentObject[0]["value"];
      let isInputValid = this.lenghValid(inputValueText, eventId);
      if (!isInputValid) {
        const myNewData = this.mapData(this.state.data, event.target.id, false);
        this.setState({ data: myNewData });
        valid = false;
      } else {
        const myNewData = this.mapData(this.state.data, event.target.id, true);
        this.setState({ data: myNewData });
        valid = true;
      }
    } else {
      let currentObjects = this.state.data;
      currentObjects.forEach(object => {
        if (object.type !== "checklist" && object.type !== "textarea") {
          let itemId = object["inputId"];
          let isInputValid = this.lenghValid(object["value"], itemId);
          if (!isInputValid) {
            currentObjects = this.mapData(
              currentObjects,
              object["inputId"],
              false
            );
            valid = false;
          } else {
            currentObjects = this.mapData(
              currentObjects,
              object["inputId"],
              true
            );
            valid = true;
          }
        }
      });
      this.setState({ data: currentObjects });
    }

    return valid;
  };

  validateOnBlur = event => {
    event.preventDefault();
    let targetType = event.target.type;
    let eventId = event.target.name;
    let eventValue = event.target.value;
    let valid = true;

    if (targetType === "text") {
      let inputValueText = eventValue;
      let isInputValid = this.lenghValid(inputValueText, eventId);
      if (!isInputValid) {
        const myNewData = this.mapData(this.state.data, event.target.id, false);
        this.setState({ data: myNewData });
        valid = false;
      } else {
        const myNewData = this.mapData(this.state.data, event.target.id, true);
        this.setState({ data: myNewData });
        valid = true;
      }
    } else {
      let currentObjects = this.state.data;
      if (targetType !== "checklist" && targetType !== "textarea") {
        let itemId = event.target.id;
        let isInputValid = this.lenghValid(eventValue, itemId);
        if (!isInputValid) {
          currentObjects = this.mapData(currentObjects, itemId, false);
          valid = false;
        } else {
          currentObjects = this.mapData(currentObjects, itemId, true);
          valid = true;
        }
      }
      this.setState({ data: currentObjects });
    }
    return valid;
  };

  lenghValid(key, name) {
    const keyValue = key;
    const eventName = name;
    if (eventName === "email") {
      console.log(`My name is ${eventName} and return ${this.emailValid(key)}`);
      return this.emailValid(key);
    } else {
      let keyValueLength = keyValue.length;
      return keyValueLength > 0 ? true : false;
    }
  }

  SlackMrkdwn() {
    let values = this.state.data;
    let topMessage = {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "⚡G'day we have a reply!⚡"
      }
    };
    let devider = {
      type: "divider"
    };

    let textObj = values.map(value => {
      if (value.type !== "checklist") {
        return {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: "*" + value.inputId + "*"
            },
            {
              type: "plain_text",
              text: value.value
            }
          ]
        };
      } else {
        return {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: "*" + value.label + "*"
            },
            {
              type: "plain_text",
              text: " "
            },
            {
              type: "plain_text",
              text: value.options[0].optionLabel
            },
            {
              type: "plain_text",
              text: value.options[0].checked.toString()
            },
            {
              type: "plain_text",
              text: value.options[1].optionLabel
            },
            {
              type: "plain_text",
              text: value.options[1].checked.toString()
            },
            {
              type: "plain_text",
              text: value.options[2].optionLabel
            },
            {
              type: "plain_text",
              text: value.options[2].checked.toString()
            }
          ]
        };
      }
    });

    textObj.unshift(topMessage);
    let objFinal = { blocks: textObj };
    textObj.push(devider);
    return objFinal;
  }

  fetchToSlack = (url, mode, method, body, headers) =>
    fetch(url, {
      mode: mode,
      method: method,
      body: body,
      headers: headers
    });

  sendToSlack = () => {
    let slackText;

    slackText = this.SlackMrkdwn();
    console.log(slackText);

    const stateText = JSON.stringify(slackText);
    this.fetchToSlack(urlSlack, "no-cors", "post", stateText, {
      "Content-Type": "application/json"
    })
      .then(response =>
        response.status === 0
          ? this.setState({
              renderChecklist: "thanks",
              renderAppSelector: false,
              renderProjectInformation: false
            })
          : this.renderChecklist
      )
      .catch(function(error) {
        console.error("Fetch brings an error. And it is", error);
      });
  };

  handleSubmit = ev => {
    console.log("submitting");
    ev.preventDefault();
    let valid;
    valid = this.validate(ev);

    if (valid) {
      this.sendToSlack();
    }
  };

  render() {
    return (
      <>
        <FormWrapper
          onChange={this.onChange}
          validateOnBlur={this.validateOnBlur}
          values={this.state.data}
          button={true}
          submitHandlerProps={this.handleSubmit}
          name={"Project Information"}
        />

        {/* {this.state.renderChecklist === "thanks" ? (
          <Textblock
            formTitle={`Seems like you need help! Thank you for reaching out ${this.state.name}.`}
            text="We've got your submisson and will reach out as soon as possible! Have a good day :)"
            showButton={true}
            buttonText={"Submit Another Project"}
            sbumitHandler={this.stateDefaultHandler}
          />
        ) : null}

        <Inputsform
          changeListener={this.handleInputChange}
          inputValues={inputValuesForProject}
          formTitle="Project Information"
          submitButton={false}
          blurHadnler={this.handleImput}
          renderInputForm={this.state.renderProjectInformation}
        />
        {this.state.emailValidRender === true &&
        this.state.projectNameValidRender === true ? (
          <AppSelector
            tabChangeHandler={this.tabHandler}
            renderApp={this.state.renderAppSelector}
          />
        ) : null}

        {this.state.renderChecklist === "web" ? (
          <Inputsform
            changeListener={this.handleInputChange}
            inputValues={inputValuesForChecklist}
            formTitle="Please fill a Checklist below"
            submitButton={true}
            sbumitHandler={this.sbumitReply}
            renderInputForm={true}
            selectChecklistFlag={this.state.selectChecklistShow}
          />
        ) : this.state.renderChecklist === "app" ? (
          <Appchecklist
            changeListener={this.handleInputChange}
            inputValues={inputValuesForAppChecklist}
            formTitle="It's a little bit different for apps!"
            submitButton={true}
            sbumitHandler={this.sbumitReply}
          />
        ) : null} */}
      </>
    );
  }
}

export default SeoChecklist;
