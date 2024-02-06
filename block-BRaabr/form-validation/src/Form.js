import React from "react";

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
  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  handleInput = ({ target }) => {
    var { name, value } = target;
    var errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username =
          value.length < 3 ? "Username must be at least 3 characters" : "";
        break;
      case "email":
        errors.email = this.validateEmail(value) ? "" : "Email is not valid";
        break;
      case "password":
        errors.password =
          value.length < 6 ? "Password must be at least 6 characters" : "";
        break;

      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("Form validation done!");
  };
  render() {
    var { username, email, password, confirm } = this.state.errors;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Register With Us</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          onChange={this.handleInput}
          className={username ? "error" : " "}
        />
        <span>{username}</span>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          onChange={this.handleInput}
          className={email ? "error" : " "}
        />
        <span>{email}</span>
        <label htmlFor="username">Password</label>
        <input
          type="text"
          placeholder="Enter Password"
          name="password"
          onChange={this.handleInput}
          className={password ? "error" : " "}
        />
        <span>{password}</span>
        <label htmlFor="username"> Confirm Password</label>
        <input
          type="text"
          placeholder="Enter password again"
          name="confirm"
          onChange={this.handleInput}
          className={this.state.password === this.state.confirm ? "" : "error"}
        />
        <span>
          {this.state.password === this.state.confirm
            ? ""
            : "this password must be same as entered above"}
        </span>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
