import React, { Component } from "react";
import Video from "./Video";
import Slider from "./Slider";

class Trailer extends Component {
  state = {
    trailers: []
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        const mostPopular = data.results.sort(
          (a, b) => b.popularity - a.popularity
        );
        const firstFiveMovies = mostPopular.slice(0, 5);
        const movies = firstFiveMovies.map(item => {
          return <Video movieId={item.id} key={item.id} />;
        });
        this.setState({
          trailers: movies
        });
      });
  }
  render() {
    const { trailers } = this.state;
    return (
      <div className="trailers">
        <h1>Trailers</h1>
        <div className="youtube-videos">
          <Slider youtube={trailers} />
        </div>
      </div>
    );
  }
}

export default Trailer;
