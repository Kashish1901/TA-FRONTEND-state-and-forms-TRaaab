import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };
  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <>
        <center>
          <h1>Counter App With twist!</h1>
          <h2>{this.state.counter}</h2>
          <div className="steps">
            <button className="light-button">5</button>
            <button className="light-button">10</button>
            <button className="dark-button">15</button>
          </div>
          <button onClick={this.handleIncrement}>INCREMENT</button>
          <button onClick={this.handleDecrement}>DECREMENT</button>
          <button onClick={this.handleReset}>RESET</button>
        </center>
      </>
    );
  }
}

export default App;
