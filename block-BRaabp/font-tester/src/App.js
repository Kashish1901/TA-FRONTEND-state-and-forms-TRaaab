import React from "react";
import Cards from "./Card";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  render() {
    return (
      <>
        <center>
          <h1>Font Tester App</h1>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Type Something"
          />
          <Cards text={this.state.text} />
        </center>
      </>
    );
  }
}
export default App;
