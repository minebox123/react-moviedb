import React, { Component } from "react";
import Video from "./Video";
import Slider from "./Slider";

class Trailer extends Component {
  state = {
    popularShow: []
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          popularShow: data.results
        })
      );
  }
  render() {
    const showArr = this.state.popularShow.slice(0, 5).map(item => {
      return <Video id={item.id} key={item.id} />;
    });

    return (
      <div className="trailers">
        <h1>Trailers</h1>
        <div className="youtube-videos">
          <Slider youtube={showArr} />
        </div>
      </div>
    );
  }
}

export default Trailer;
