import React from "react";
import movies from "./data.json";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMovie: movie,
    };
  }
  handleClick = () => {
    this.setState({
      activeMovie: movie,
    });
  };
  render() {
    return (
      <>
        <center>
          <ul className="movie-box">
            {movies.map((movie) => (
              <li key={movie}>
                <h2>{movie.Title}</h2>
                <img src={movie.Images} alt={movie.Images} width="200" />
                <h4>{movie.Released}</h4>
                <button onClick={this.handleClick(movie)}>KNOW MORE!</button>
              </li>
            ))}
          </ul>
        </center>
      </>
    );
  }
}

export default Movie;
