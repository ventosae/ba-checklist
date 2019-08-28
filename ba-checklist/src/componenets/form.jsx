import React, { Component } from "react";

class Form extends Component {
  state = {};
  render() {
    return (
      <form className="form-b">
        <div class="form-group form-b__group">
          <label for="exampleFormControlInput1 form-b__lable">
            Project Name
          </label>
          <input
            class="form-control form-b__input"
            id="exampleFormControlInput1"
            placeholder="Name of the Project"
          />
        </div>
        <div class="form-group form-b__group">
          <label for="exampleFormControlSelect1 form-b__lable">
            Question 1
          </label>
          <select
            class="form-control form-b__select"
            id="exampleFormControlSelect1"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group form-b__group">
          <label for="exampleFormControlSelect2 form-b__lable">
            Question 2 multiple
          </label>
          <select
            multiple
            class="form-control form-b__select"
            id="exampleFormControlSelect2"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group form-b__group">
          <label for="exampleFormControlTextarea1 form-b__lable">
            Example textarea
          </label>
          <textarea
            class="form-control form-b_text"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
      </form>
    );
  }
}

export default Form;
