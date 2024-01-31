import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "basketball",
    };
  }
  render() {
    var labels = ["basketball", "pubg", "tiger", "phone", "laptop", "cricket"];
    return (
      <center>
        <div>
          <>
            {labels.map((label) => (
              <button
                className={this.state.active === label ? "active" : ""}
                onClick={() => {
                  this.setState({
                    active: label,
                  });
                }}
              >
                {label}
              </button>
            ))}
          </>
        </div>
        <img
          alt={this.state.active}
          src={`./images/assets/${this.state.active}.jpg`}
          width="500"
        />
      </center>
    );
  }
}

export default App;
