import React from "react";

class MultipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      date: "",
      file: "",
      readOnly: "",
      disabledInput: "",
      textArea: "",
      disabledarea: "",
    };
  }

  handleInput = ({ target }) => {
    var { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Text Input</label>
        <input type="text" name="text" onChange={this.handleInput} />
        <label>Date Input</label>
        <input type="date" name="date" onChange={this.handleInput} />
        <label>File Input</label>
        <input type="file" name="file" onChange={this.handleInput} />
        <label>Read-Only Input</label>
        <input
          type="text"
          readOnly
          placeholder="This can only be copied"
          name="readOnly"
          onChange={this.handleInput}
        />
        <label>Disabled Input</label>
        <input
          type="text"
          disabled
          name="disabledInput"
          onChange={this.handleInput}
        />
        <label>Textarea Input</label>
        <textarea rows="5" name="textArea" onChange={this.handleInput} />
        <label>Textarea Input Disabled</label>
        <textarea
          rows="5"
          disabled
          name="disabledarea"
          onChange={this.handleInput}
        />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default MultipleInput;
