import React, { Component } from "react";
import Slider from "../Slider";
// import AdditionalInfo from "../AdditionalInformation/AdditionalInfo";
import { Link } from "react-router-dom";

// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
// import AdditionalInfo from "../AdditionalInformation/AdditionalInfo";

class Data extends Component {
  state = {
    movies: [],
    movieId: null
  };

  onClick = e => {
    this.setState({
      movieId: e.target.id
    });
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        let movies = data.results.map(item => {
          return (
            <div className="movie-container" key={item.id}>
              <div className="poster">
                {item.vote_average >= 7 ? (
                  <div className="vote" style={{ backgroundColor: "green" }}>
                    <span>{item.vote_average}</span>
                  </div>
                ) : (
                  <div className="vote">
                    <span>
                      {item.vote_average === 0 ? (
                        "—"
                      ) : (
                        <span>{item.vote_average}</span>
                      )}
                    </span>
                  </div>
                )}
                <Link to={`/movieInfo/${item.id}`}>
                  <div className="overlay" onClick={this.onClick}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${
                        item.poster_path
                      }`}
                      alt={item.title}
                      id={item.id}
                    />
                  </div>
                </Link>
              </div>
              <div className="title">
                <h3>{item.title}</h3>
              </div>
              <div className="release-date">
                <p>Release date: {item.release_date}</p>
              </div>
            </div>
          );
        });

        this.setState({
          movies: movies
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="carousel">
        <Slider movie={movies} />
      </div>
    );
  }
}

export default Data;
