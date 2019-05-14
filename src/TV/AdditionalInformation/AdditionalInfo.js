import React, { Component } from "react";
import Runtime from "./Runtime";

import Review from "./Review";
import Cast from "./Cast";
import Videos from "./Videos";
import Backdrops from "./Backdrops";
import Posters from "./Posters";
import "../../Style/showInformation.css";

// Create a page with some information about a tv show.
// One needs to load id from a tv show  by clicking on a poster.
class AdditionalInfo extends Component {
  state = {
    movie: [],
    isLoading: true,
    isVideo: true,
    isBackdrop: false,
    isPoster: false
  };

  onVideoClick = () => {
    this.setState({
      isVideo: true,
      isBackdrop: false,
      isPoster: false
    });
  };

  onBackdropClick = () => {
    this.setState({
      isVideo: false,
      isBackdrop: true,
      isPoster: false
    });
  };

  onPosterClick = () => {
    this.setState({
      isVideo: false,
      isBackdrop: false,
      isPoster: true
    });
  };

  componentDidMount() {
    const { id } = this.props;
    if (!id) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          movie: data,
          isLoading: false
        })
      );
  }
  render() {
    const { movie, isLoading, isVideo, isBackdrop, isPoster } = this.state;

    const style = {
      backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${
        movie.backdrop_path
      })`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };
    return (
      <div className="movieInfo-container">
        {isLoading ? (
          <div>
            <h1>Loading</h1>
          </div>
        ) : (
          <React.Fragment>
            <div className="movie-info-overlay">
              <section className="title-section" style={style}>
                <div className="movieInfo-wrapper">
                  <div className="movie-poster">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${
                        movie.poster_path
                      }`}
                      alt={movie.title}
                    />
                  </div>
                  <div className="movieInfo-title">
                    <h1>{movie.name}</h1>
                    <div className="user-score">
                      <p>User Score</p>
                      <span>{movie.vote_average}</span>
                    </div>
                    <div className="overview">
                      <h3>Overview</h3>
                      <p>{movie.overview}</p>
                    </div>
                    <div className="small-container">
                      <div className="release-dates">
                        <h3>First air date</h3>
                        <p>{movie.first_air_date}</p>
                        <h3>Last air date</h3>
                        <p>{movie.last_air_date}</p>
                      </div>
                      <div className="number-of-seasons">
                        <h3>Seasons</h3>
                        <p>{movie.number_of_seasons}</p>
                      </div>
                      <div className="number-of-episodes">
                        <h3>Episodes</h3>
                        <p>{movie.number_of_episodes}</p>
                      </div>
                      <div className="runtime">
                        <h3>Runtime</h3>
                        <Runtime runtime={movie.episode_run_time} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <section className="cast-section">
              <Cast id={movie.id} />
            </section>
            <section className="review">
              <Review id={movie.id} title={movie.title} />
            </section>
            <section className="media">
              <div className="media-links">
                <h2>Media</h2>
                <ul>
                  {isVideo ? (
                    <li
                      style={{ borderBottom: "4px solid #1586B5" }}
                      onClick={this.onVideoClick}
                    >
                      Videos
                    </li>
                  ) : (
                    <li onClick={this.onVideoClick}>Videos</li>
                  )}
                  {isBackdrop ? (
                    <li
                      style={{ borderBottom: "4px solid #1586b5" }}
                      onClick={this.onBackdropClick}
                    >
                      Backdrops
                    </li>
                  ) : (
                    <li onClick={this.onBackdropClick}>Backdrops</li>
                  )}
                  {isPoster ? (
                    <li
                      style={{ borderBottom: "4px solid #1586b5" }}
                      onClick={this.onPosterClick}
                    >
                      Posters
                    </li>
                  ) : (
                    <li onClick={this.onPosterClick}>Posters</li>
                  )}
                </ul>
              </div>
              {isVideo ? (
                <Videos id={movie.id} />
              ) : isBackdrop ? (
                <Backdrops id={movie.id} />
              ) : isPoster ? (
                <Posters id={movie.id} />
              ) : null}
            </section>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default AdditionalInfo;
