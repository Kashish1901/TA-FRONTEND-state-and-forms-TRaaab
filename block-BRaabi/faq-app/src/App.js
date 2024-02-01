import React from "react";
import faqs from "./data.json";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeState: null,
    };
  }
  render() {
    return (
      <>
        <center>
          <h1>AltCampus FAQ</h1>
          <ul>
            {faqs.map((faq, index) => (
              <li>
                <h2
                  onClick={() => {
                    this.setState({
                      activeState:
                        this.state.activeState === index ? null : index,
                    });
                  }}
                >
                  {faq.Q} {this.state.activeState === index ? "☝️" : "👇"}
                </h2>
                {index === this.state.activeState ? <p>{faq.A}</p> : ""}
              </li>
            ))}
          </ul>
        </center>
      </>
    );
  }
}

export default App;
