import React from "react";

// Validation functions
const validateUsername = (username) => username.length >= 3;
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) => password.length >= 6;

// Input field component
const InputField = ({ type, value, placeholder, name, onChange, error }) => (
  <>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      className={error ? "error" : ""}
    />
    <span>{error}</span>
  </>
);

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm: "",
      errors: {
        username: "",
        email: "",
        password: "",
      },
    };
  }

  handleInput = ({ target }) => {
    const { name, value } = target;
    const { errors } = this.state;
    let error = "";

    switch (name) {
      case "username":
        error = validateUsername(value)
          ? ""
          : "Username must be at least 3 characters";
        break;
      case "email":
        error = validateEmail(value) ? "" : "Email is not valid";
        break;
      case "password":
        error = validatePassword(value)
          ? ""
          : "Password must be at least 6 characters";
        break;
      case "confirm":
        error =
          value === this.state.password
            ? ""
            : "This password must be same as entered above";
        break;
      default:
        break;
    }

    this.setState((prevState) => ({
      errors: {
        ...prevState.errors,
        [name]: error,
      },
      [name]: value,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Form validation done!");
  };

  render() {
    const { errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register With Us</h1>
        <label htmlFor="username">Username</label>
        <InputField
          type="text"
          value={this.state.username}
          placeholder="Enter Username"
          name="username"
          onChange={this.handleInput}
          error={errors.username}
        />
        <label htmlFor="email">Email</label>
        <InputField
          type="text"
          placeholder="Enter Email"
          name="email"
          value={this.state.email}
          onChange={this.handleInput}
          error={errors.email}
        />
        <label htmlFor="password">Password</label>
        <InputField
          type="password"
          value={this.state.password}
          placeholder="Enter Password"
          name="password"
          onChange={this.handleInput}
          error={errors.password}
        />
        <label htmlFor="confirm">Confirm Password</label>
        <InputField
          type="password"
          placeholder="Enter password again"
          value={this.state.confirm}
          name="confirm"
          onChange={this.handleInput}
          error={errors.confirm}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
