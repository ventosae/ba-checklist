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

const urlSlack =
  "https://0e6xozda97.execute-api.ap-southeast-2.amazonaws.com/slack-send/send-to-slack-seo";

class SeoChecklist extends Component {
  state = {
    projectValue: inputValuesForProject,
    checklistValue: inputValuesForChecklist,
    appChecklistValue: inputValuesForAppChecklist,
    displayProjectValue: true,
    displayInputProject: true
  };

  getName = () => {
    const userName = this.state.email.split(".").shift();
    this.setState({ name: userName });
  };

  stateDefaultHandler = () => {
    this.setState(defaultState);
  };

  appSelectorValidator = () => {
    let nameValid = this.lenghValid(this.state.projectValue[0].value, "text");
    let emailValid = this.lenghValid(this.state.projectValue[1].value, "email");
    let renderAppSelector = nameValid && emailValid ? true : false;
    if (!renderAppSelector) {
      this.setState({
        displayAppChecklist: renderAppSelector,
        renderChecklist: false
      });
    } else {
      this.setState({
        displayAppChecklist: renderAppSelector
      });
    }
  };

  tabHandler = event => {
    let eventId = event.target.id;
    this.setState({ renderChecklist: eventId });
  };

  updateInputs(ev, stateValues) {
    let result;
    let stateValue = this.state[stateValues];

    result = stateValue.map(item => {
      if (ev.target.id === item.inputId) {
        const updatedItem = { ...item, value: ev.target.value };

        return updatedItem;
      } else {
        return item;
      }
    });

    return result;
  }

  onChange = (ev, stateValues) => {
    ev.stopPropagation();
    let updatedState;
    if (ev.target.type !== "checkbox") {
      updatedState = this.updateInputs(ev, stateValues);
    } else {
      const checkListSelection = this.state[stateValues].filter(
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
      const checklistIndex = this.state[stateValues].findIndex(
        item => item.inputId === checkList.inputId
      );
      const updatedData = this.state[stateValues];
      updatedData[checklistIndex] = checkList;
      updatedState = updatedData;
    }
    this.setState({ [stateValues]: updatedState });
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

  validate = (event, stateValues) => {
    event.preventDefault();
    let targetType = event.target.type;
    let eventId = event.target.name;
    let valid = true;
    let stateValidName = stateValues + "Valid";
    console.log("stateValidName", stateValidName);
    const fields = this.state[stateValues];
    if (targetType === "text") {
      let currentObject = fields.filter(item => {
        return item.inputId === eventId;
      });

      let inputValueText = currentObject[0]["value"];
      let isInputValid = this.lenghValid(inputValueText, eventId);
      if (!isInputValid) {
        const myNewData = this.mapData(
          this.state[stateValues],
          event.target.id,
          false
        );
        this.setState({ [stateValues]: myNewData });
        this.setState({ stateValues: false });
        valid = false;
      } else {
        const myNewData = this.mapData(
          this.state[stateValues],
          event.target.id,
          true
        );
        this.setState({ [stateValues]: myNewData });
        valid = true;
      }
    } else {
      let currentObjects = this.state[stateValues];
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
      this.setState({ [stateValues]: currentObjects });
    }

    return valid;
  };

  validateOnBlur = (event, stateValues) => {
    event.preventDefault();
    let targetType = event.target.type;
    let eventId = event.target.name;
    let eventValue = event.target.value;
    let valid = true;

    if (targetType === "text") {
      let inputValueText = eventValue;
      let isInputValid = this.lenghValid(inputValueText, eventId);
      if (!isInputValid) {
        const myNewData = this.mapData(
          this.state[stateValues],
          event.target.id,
          false
        );
        this.setState({ [stateValues]: myNewData });
        valid = false;
      } else {
        const myNewData = this.mapData(
          this.state[stateValues],
          event.target.id,
          true
        );
        this.setState({ [stateValues]: myNewData });
        valid = true;
      }
    } else {
      let currentObjects = this.state[stateValues];
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
      this.setState({ [stateValues]: currentObjects });
    }
    this.appSelectorValidator();
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
    let values;
    if (this.state.renderChecklist !== "app") {
      values = [...this.state.projectValue, ...this.state.checklistValue];
    } else {
      values = [...this.state.projectValue, ...this.state.appChecklistValue];
    }
    let topMessage = {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "⚡G'day we have a reply!⚡"
      }
    };

    let typeMessage = {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: "Okay, is it App or Web? It is:"
        },
        {
          type: "plain_text",
          text: this.state.renderChecklist
        }
      ]
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

    textObj.unshift(typeMessage);
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
      "text": "json"
    })
      .then(response =>
        response.status === 0
          ? this.setState({
              renderChecklist: "thanks",
              displayAppChecklist: false,
              displayInputProject: false
            })
          : this.renderChecklist
      )
      .catch(function(error) {
        console.error("Fetch brings an error. And it is", error);
      });
  };

  handleSubmit = (ev, stateValues) => {
    console.log("submitting");
    ev.preventDefault();
    let valid;
    valid = this.validate(ev, stateValues);

    if (valid) {
      this.sendToSlack();
    }
  };

  render() {
    return (
      <>
        {this.state.renderChecklist === "thanks" ? (
          <Textblock
            formTitle={`Seems like you need help! Thank you for reaching out ${this.state.name}.`}
            text="We've got your submisson and will reach out as soon as possible! Have a good day :)"
            showButton={true}
            buttonText={"Submit Another Project"}
            sbumitHandler={this.stateDefaultHandler}
          />
        ) : null}
        {this.state.displayInputProject === true ? (
          <FormWrapper
            onChange={e => {
              this.onChange(e, "projectValue");
            }}
            validateOnBlur={e => {
              this.validateOnBlur(e, "projectValue");
            }}
            values={this.state.projectValue}
            button={false}
            submitHandlerProps={e => {
              this.handleSubmit(e, "projectValue");
            }}
            name={"Project Information"}
          />
        ) : null}

        <AppSelector
          tabChangeHandler={this.tabHandler}
          renderApp={this.state.displayAppChecklist}
        />

        {this.state.renderChecklist === "web" ? (
          <FormWrapper
            onChange={e => {
              this.onChange(e, "checklistValue");
            }}
            validateOnBlur={e => {
              this.validateOnBlur(e, "checklistValue");
            }}
            values={this.state.checklistValue}
            button={true}
            submitHandlerProps={e => {
              this.handleSubmit(e, "checklistValue");
            }}
            name={"Please fill the checklist below"}
          />
        ) : this.state.renderChecklist === "app" ? (
          <Appchecklist
            changeListener={e => {
              this.onChange(e, "appChecklistValue");
            }}
            inputValues={this.state.appChecklistValue}
            formTitle="It's a little bit different for apps!"
            submitButton={true}
            sbumitHandler={e => {
              this.handleSubmit(e, "appChecklistValue");
            }}
          />
        ) : null}
      </>
    );
  }
}

export default SeoChecklist;
