import React, { Component } from "react";
import Runtime from "../Runtime";

import parse from "html-react-parser";

class Mobile extends Component {
  state = {
    isClosed: true
  };
  onClick = () =>
    this.setState({
      isClosed: !this.state.isClosed
    });

  render() {
    const { movie } = this.props;
    const { isClosed } = this.state;

    return (
      <div className="mobile-movie">
        <section className="mobile-movie__content">
          <div className="mobile-movie__movie-info">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="mobile-movie__movie-info text-facts">
              <h2>{movie.title}</h2>
              <p>
                Release date <span>{movie.release_date}</span>
              </p>
              <h3>
                Runtime
                <Runtime runtime={movie.runtime} />
              </h3>
              <ul>
                {movie.genres !== undefined
                  ? movie.genres
                      .slice(0, 3)
                      .map(item => <li key={item.id}>{item.name}</li>)
                  : null}
              </ul>
            </div>
          </div>
          <div className="mobile-movie__movie-overview" onClick={this.onClick}>
            <h2>
              Overview <i className="fas fa-angle-down" />
            </h2>
            {isClosed ? null : (
              <div className="mobile-movie__movie-overview drop-down">
                {parse(movie.overview)}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default Mobile;
