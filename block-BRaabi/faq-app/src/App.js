import React from "react";
import data from "./data.json";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <center>
          <h1>CLOSED STATE</h1>
          {data.map((Q) => {
            <button>{this.props.Q}</button>;
          })}
        </center>
      </>
    );
  }
}

export default App;
