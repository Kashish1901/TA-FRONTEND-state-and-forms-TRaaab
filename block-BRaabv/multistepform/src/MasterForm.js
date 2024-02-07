import React from "react";
import Header from "./Header";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./step3";
class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: 1,
      firstname: "",
      lastname: "",
      dateOfBirth: "",
      email: "",
      address: "",
      message: "",
      checkbox: "",
    };
  }
  handleChange = ({ target }) => {
    var { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  _next = () => {
    let currentState = this.state.currentState;
    currentState = currentState >= 2 ? 3 : currentState + 1;
    this.setState({
      currentState: currentState,
    });
  };

  _prev = () => {
    let currentState = this.state.currentState;
    currentState = currentState <= 1 ? 1 : currentState - 1;
    this.setState({
      currentState: currentState,
    });
  };
  previousButton() {
    let currentState = this.state.currentState;
    if (currentState !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentState = this.state.currentState;
    if (currentState < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  handleSubmit = (event) => {
    var { currentState } = this.state;
    event.preventDefault();
    alert({ currentState } + `done successfully`);
  };
  render() {
    return (
      <>
        <center>
          <Header currentState={this.state.currentState} />
          <h1>Multi Step Form</h1>
        </center>
        <p>Step {this.state.currentState}/3</p>

        <Step1
          currentState={this.state.currentState}
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          dateOfBirth={this.state.dateOfBirth}
          email={this.state.email}
          address={this.state.address}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Step2
          currentState={this.state.currentState}
          handleChange={this.handleChange}
          message={this.state.message}
          handleSubmit={this.handleSubmit}
        />
        <Step3
          currentState={this.state.currentState}
          handleChange={this.handleChange}
          checkbox={this.checkbox}
          handleSubmit={this.handleSubmit}
        />
        {this.previousButton()}
        {this.nextButton()}
      </>
    );
  }
}

export default MasterForm;
