import React, { Component } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";

class TopRated extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        const movie = data.results.map(item => {
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
                  <div className="overlay">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${
                        item.poster_path
                      }`}
                      alt={item.title}
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
          movies: movie
        });
      });
  }
  render() {
    const { movies } = this.state;
    return (
      <div className="top-rated">
        <h2>Top Rated</h2>
        <Slider movies={movies} />
      </div>
    );
  }
}

export default TopRated;
