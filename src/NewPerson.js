import React from "react";
import { Component } from "react";
import "./css/NewPerson.css";

class NewPerson extends Component {
  state = {
    name: "",
    job: "",
    gender: "",
  };
  setValues = (e) => this.setState({ [e.target.id]: e.target.value });

  save = (e) => {
    e.preventDefault();
    this.props.insertNewPerson(this.state);
  };


  render() {
    return (
      <div>
        <form action="" onSubmit={this.save}>
          <input
            className="field"
            onChange={this.setValues}
            id="name"
            type="text"
            placeholder="name"
          />
          <input
            className="field"
            onChange={this.setValues}
            id="job"
            type="text"
            placeholder="job"
          />
          <input
            className="field"
            onChange={this.setValues}
            id="gender"
            type="text"
            placeholder="gender"
          />
          <button className="btn" type="submit">
            Click Me
          </button>
        </form>
      </div>
    );
  }
}
export default NewPerson;
