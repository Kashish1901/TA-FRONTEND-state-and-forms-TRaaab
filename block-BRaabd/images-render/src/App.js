import React from "react";
import basketball from "./assets/basketball.jpg";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <center>
        <button>BasketBall</button>
        <button>PUBG</button>
        <button>Tiger</button>
        <button>Phone</button>
        <button>Laptop</button>
        <button>Cricket</button>
        <div>
          <img src="" alt="basketBall">
            {this.props.basketball}
          </img>
        </div>
      </center>
    );
  }
}

export default App;
