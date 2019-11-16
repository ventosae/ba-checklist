import React, { Component } from "react";
import {
  inputValuesForProject,
  inputValuesForChecklist,
  inputValuesForAppChecklist,
  defaultState,
  SlackMrkdwn
} from "./formData.js";
import Fieldsgenerator from "./fields-generator.js";
import Button from "./button.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// const axios = require("axios");
const FormFields = inputValuesForProject;

class FormWrapper extends Component {
  state = {
    data: FormFields
  };

  onChange = ev => {
    ev.preventDefault();
    const myNewData = this.state.data.map(item => {
      if (item.inputId === ev.target.id) {
        console.log(item.inputId);
        return { ...item, value: ev.target.value }; //what's happening here?
      }
      return item;
    });

    this.setState({
      data: myNewData
    });
  };

  emailValid(key) {
    let emailValue = key;
    debugger;
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

  mapData = (eventId, stateInput, result) => {
    let input = stateInput;
    this.state.data.map(item => {
      if (item.inputId === eventId) {
        return { ...item, [input]: result };
      }
      return item;
    });
  };

  validate = event => {
    event.preventDefault();
    let targetType = event.target.type;
    let eventId = event.target.name;
    let valid = true;
    const fields = this.state.data;

    let fieldsKeys = [];

    if (targetType === "text") {
      let currentObject = fields.filter(item => {
        return item.inputId === eventId;
      });
      let inputValueText = currentObject[0]["value"];
      let isInputValid = this.lenghValid(inputValueText, eventId);
      if (!isInputValid) {
        const myNewData = this.mapData(event.target.id, "isValid", false);
        debugger;
        this.setState({ data: myNewData });
        valid = false;
      } else {
        const myNewData = this.state.data.map(item => {
          if (item.inputId === event.target.id) {
            return { ...item, isValid: true };
          }
          return item;
        });
        this.setState({ data: myNewData });
        valid = true;
      }
    } else {
      fieldsKeys = ["domain", "rendering", "schema", "pagespeed"]; // weak part need to go through the dom and collect names. Or there is a better way?!
    }
    for (var i = 0; i < fieldsKeys.length; i++) {
      let currentObject = fields.filter(item => {
        return item.inputId === fieldsKeys[i];
      });
      let inputValue = currentObject[0]["value"];
      let key = currentObject[0]["inputId"];
      debugger;
      console.log("the name in state is", key);
      const projectNameStatus = this.lenghValid(inputValue, key);
      debugger;
      let fieldsKeyString = String(key);
      let keyValid = fieldsKeyString.concat("Valid");
      let fieldValid = keyValid.concat("Render");
      console.log("Key Valid Value", keyValid);
      if (!projectNameStatus) {
        if (targetType === "text") {
          this.setState({ [keyValid]: projectNameStatus });
          this.setState({ [fieldValid]: projectNameStatus });
          document.getElementById(eventId).className =
            "form-control form-b__input form-b__input--input is-invalid";

          this.setState({ renderChecklist: false });
          const myNewData = this.state.data.map(item => {
            if (item.inputId === event.target.id) {
              return { ...item, isValid: false }; //what's happening here?
            }
            return item;
          });
          this.setState({ data: myNewData });

          valid = false;
        } else {
          this.setState({ [keyValid]: projectNameStatus });
          const myNewData = this.state.data.map(item => {
            if (item.inputId === event.target.id) {
              return { ...item, isValid: true }; //what's happening here?
            }
            return item;
          });
          this.setState({ data: myNewData });
          document.getElementById(fieldsKeyString).className =
            "form-control form-b__select is-invalid";
          // this.setState({ renderChecklist: false });
          valid = false;
        }
      } else {
        if (targetType === "text") {
          this.setState({ [keyValid]: projectNameStatus });
          this.setState({ [fieldValid]: projectNameStatus });
          document.getElementById(eventId).className =
            "form-control form-b__input form-b__input--input";
        } else {
          document.getElementById(fieldsKeyString).className =
            "form-control form-b__select";
          this.setState({ [keyValid]: projectNameStatus });
        }
      }
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
    this.props.send(this.state.data);
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
                show={false}
                // sbumitHandler={console.log("meow, you've submitted me")}
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
