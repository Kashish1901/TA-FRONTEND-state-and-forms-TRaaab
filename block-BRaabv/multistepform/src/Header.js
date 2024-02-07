import React from "react";

class Header extends React.Component {
  renderCheckbox(label, value) {
    return (
      <div className="checked">
        <label htmlFor={`step${value}`} className="flex">
          <input
            type="checkbox"
            value={value}
            checked={this.props.currentState === value ? "checked" : ""}
          />
          {label}
        </label>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="container">
          {this.renderCheckbox("SignUp", 1)}
          {this.renderCheckbox("Message", 2)}
          {this.renderCheckbox("Checkbox", 3)}
        </div>
        <hr></hr>
      </>
    );
  }
}

export default Header;
