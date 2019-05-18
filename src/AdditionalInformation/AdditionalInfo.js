import React, { Component } from "react";
import Runtime from "../Runtime";
import { Budget, Revenue } from "./Currency";
import Review from "./Review";
import Cast from "./Cast";
import Videos from "./Videos";
import Backdrops from "./Backdrops";
import Posters from "./Posters";
import parse from "html-react-parser";

// Create a page with some information about a movie.
// One needs to load id from a movie by clicking on a poster.
class AdditionalInfo extends Component {
  state = {
    movie: [],
    isLoading: true,
    isVideo: true,
    isBackdrop: false,
    isPoster: false,
    width: window.innerWidth,
    isClosed: true
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

  onClick = () =>
    this.setState({
      isClosed: !this.state.isClosed
    });

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth());
    const { id } = this.props;
    if (!id) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          movie: data,
          isLoading: false
        })
      );
  }

  updateWidth = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  componentWillUnmount() {
    window.addEventListener("resize", this.updateWidth);
  }
  render() {
    const {
      movie,
      isLoading,
      isVideo,
      isBackdrop,
      isPoster,
      isClosed
    } = this.state;

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
                    <h1>{movie.title}</h1>
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
                        <h3>Release date</h3>
                        <p>{movie.release_date}</p>
                      </div>
                      <div className="runtime">
                        <h3>Runtime</h3>
                        <Runtime runtime={movie.runtime} />
                      </div>
                      <div className="budget">
                        <h3>Budget</h3>
                        <Budget budget={movie.budget} />
                      </div>
                      <div className="revenue">
                        <h3>Revenue</h3>
                        <Revenue revenue={movie.revenue} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="mobile-overview" onClick={this.onClick}>
              <h2>
                Overview <i className="fas fa-angle-down" />
              </h2>
              {!isClosed ? (
                <div className="mobile__actor-biography drop-down">
                  {parse(movie.overview)}
                </div>
              ) : null}
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
                      <h3>Videos</h3>
                    </li>
                  ) : (
                    <li onClick={this.onVideoClick}>Videos</li>
                  )}
                  {isBackdrop ? (
                    <li
                      style={{ borderBottom: "4px solid #1586b5" }}
                      onClick={this.onBackdropClick}
                    >
                      <h3>Backdrops</h3>
                    </li>
                  ) : (
                    <li onClick={this.onBackdropClick}>Backdrops</li>
                  )}
                  {isPoster ? (
                    <li
                      style={{ borderBottom: "4px solid #1586b5" }}
                      onClick={this.onPosterClick}
                    >
                      <h3>Posters</h3>
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
