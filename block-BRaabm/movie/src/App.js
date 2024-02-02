import React from "react";
import Header from "./Header";
import Movie from "./Movie";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <center>
          <Header />
          <Movie />
        </center>
        ;
      </>
    );
  }
}

export default App;
