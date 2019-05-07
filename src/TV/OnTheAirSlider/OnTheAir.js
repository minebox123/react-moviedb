import React, { Component } from "react";
import Slider from "./Slider";

export default class OnTheAir extends Component {
  state = {
    shows: [],
    showId: null
  };
  onClick = e => {
    this.setState({
      showId: e.target.id
    });
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          shows: data.results
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    const onTheAir = this.state.shows.map(item => {
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

            <div className="overlay" onClick={this.onClick}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.name}
              />
            </div>
          </div>
          <div className="title">
            <h3>{item.name}</h3>
          </div>
          <div className="release-date">
            <p>Release date: {item.first_air_date}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="on-the-air">
        <h2>Now Playing</h2>
        <div className="carousel">
          <Slider air={onTheAir} />
        </div>
      </div>
    );
  }
}
