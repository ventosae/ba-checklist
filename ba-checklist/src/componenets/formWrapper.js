import React, { Component } from "react";
import {
  inputValuesForProject,
  inputValuesForChecklist,
  inputValuesForAppChecklist,
  defaultState
} from "./formData.js";
import Fieldsgenerator from "./fields-generator.js";
import Button from "./button.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// const axios = require("axios");
const FormFields = inputValuesForChecklist;
const urlSlack =
  "https://hooks.slack.com/services/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";

class FormWrapper extends Component {
  state = {
    data: FormFields
  };

  onChange = ev => {
    ev.preventDefault();
    console.log("target value is", ev.target.value);
    const myNewData = this.state.data.map(item => {
      console.log(item.type);
      if (item.type !== "checklist") {
        if (item.inputId === ev.target.id) {
          console.log(item.inputId);
          return { ...item, value: ev.target.value }; //what's happening here?
        }
      } else if (item.type === "checklist") {
        debugger;
        if (item.options[0].optionState === ev.target.id) {
          if (item.options[0].checked === true) {
            return { ...item.options, checked: false };
          } else {
            return { ...item.options, checked: true };
          }
        }
      }
      console.log("checlist value test", item);
      return item;
    });

    this.setState({
      data: myNewData
    });
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
      });
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

  handleSubmit = ev => {
    ev.preventDefault();

    // this.validate();

    // Do your validation
    // if you want to change anything in your data change it

    // if all is validated send
    // this.props.send(this.state.data);
    console.log(this.SlackMrkdwn());
    this.sendToSlack();
  };

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
      if (value.type != "checklist") {
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

  render() {
    return (
      <TransitionGroup component={null}>
        <CSSTransition
          classNames="fade"
          timeout={800}
          appear={true}
          enter={true}
          exit={true}
          in={true}
        >
          <section className="form-main__wrapper-m form-main__wrapper--form">
            <div className="form-main__wrapper-m__second">
              <h2 className="page-header page-header--h2">{"test"}</h2>
              <div className="form-group form-b__group" key="generator-div">
                <Fieldsgenerator
                  changeListener={this.onChange}
                  blurHadnler={this.validate}
                  values={this.state.data}
                />
              </div>
              <Button
                show={true}
                sbumitHandler={this.handleSubmit}
                buttonText="Submit"
              />
            </div>
          </section>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default FormWrapper;

// const SEOChecklist = function() {
//   function sendToSlack(data) {
//     // send data to slack
//     axios.post("url", { data });
//   }

//   return <FormWrapper send={sendToSlack} />;
// };
