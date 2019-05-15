import React, { Component } from "react";
import Genre from "./Genre";
import Slider from "../slider/Slider";
import { Link } from "react-router-dom";

class Trending extends Component {
  state = {
    trends: []
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=81f382d33088c6d52099a62eab51d967`
    )
      .then(res => res.json())
      .then(data => {
        const movies = data.results.slice(0, 5).map(item => {
          return (
            <div className="banner" key={item.id}>
              <Link to={`/movieInfo/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
                  alt={item.title}
                />
              </Link>

              <div className="inf">
                <h3>TRENDING</h3>
                <div className="title">
                  <h2>{item.title}</h2>
                </div>
                <div className="rating">
                  <Genre genresIds={item.genre_ids[0]} />

                  <h3>{item.vote_average}</h3>
                </div>
              </div>
            </div>
          );
        });

        this.setState({
          trends: movies
        });
      });
  }

  render() {
    const { trends } = this.state;
    return (
      <div className="slider">
        <Slider trends={trends} />
      </div>
    );
  }
}

export default Trending;
