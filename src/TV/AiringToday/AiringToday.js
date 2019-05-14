import React, { Component } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import noimage from "../../icons/noimage.svg";

export default class AiringToday extends Component {
  state = {
    show: []
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/tv/airing_today?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          show: data.results
        })
      );
  }
  render() {
    const show = this.state.show.map(item => {
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
            <Link to={`/showInfo/${item.id}`}>
              <div className="overlay" onClick={this.onClick}>
                {item.poster_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt={item.name}
                  />
                ) : (
                  <div className="no-show-image">
                    <img src={noimage} alt={item.name} />
                  </div>
                )}
              </div>
            </Link>
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
        <h2>Airing Today</h2>
        <div className="carousel">
          <Slider air={show} />
        </div>
      </div>
    );
  }
}
