import React, { Component } from "react";
import Genre from "./Genre";
import Slider from "./Slider";

class TVtrending extends Component {
  state = {
    show: []
  };

  componentDidMount() {
    if (!this.state.show) {
      return;
    } else {
      fetch(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=81f382d33088c6d52099a62eab51d967`
      )
        .then(res => res.json())
        .then(data =>
          this.setState({
            show: data.results
          })
        )
        .catch(err => console.log(err));
    }
  }
  render() {
    const shows = this.state.show.map(item => {
      return (
        <li className="tv-banner" key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
            alt={item.name}
          />

          <div className="inf">
            <h3>TRENDING</h3>
            <div className="title">
              <h2>{item.name}</h2>
            </div>
            <div className="rating">
              <Genre genresIds={item.genre_ids[0]} />

              <h3>{item.vote_average}</h3>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div className="slider">
        <Slider shows={shows} />
      </div>
    );
  }
}

export default TVtrending;
