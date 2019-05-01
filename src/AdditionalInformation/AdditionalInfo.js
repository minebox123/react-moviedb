import React, { Component } from "react";
import Runtime from "../Runtime";
import { Budget, Revenue } from "./Currency";
import Review from "./Review";
import Cast from "./Cast";
import Videos from "./Videos";
import Backdrops from "./Backdrops";
import Posters from "./Posters";

// Create a page with some information about a movie.
// One needs to load id from a movie clicking on a poster.
class AdditionalInfo extends Component {
  state = {
    movie: [],
    isLoading: true
  };

  componentDidMount() {
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
  render() {
    const { movie, isLoading } = this.state;
    console.log(movie);
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
                      <div className="release-date">
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
                  <li className="video-tab">Videos</li>
                  <li className="backdrop-tab">Backdrops</li>
                  <li className="poster-tab">Posters</li>
                </ul>
              </div>
              <Videos id={movie.id} />
              <Backdrops id={movie.id} />
              <Posters id={movie.id} />
            </section>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default AdditionalInfo;
