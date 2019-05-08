import React, { Component } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";

class NowPlaying extends Component {
  state = {
    movies: [],
    movieId: null
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        const nowPlaying = data.results.map(item => {
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
          movies: nowPlaying
        });
      });
  }
  render() {
    const { movies } = this.state;
    return (
      <div className="now-playing">
        <h2>Now Playing</h2>
        <div className="carousel">
          <Slider movies={movies} />
        </div>
      </div>
    );
  }
}

export default NowPlaying;
