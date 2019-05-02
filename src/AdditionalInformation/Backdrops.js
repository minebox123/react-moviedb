import React, { Component } from "react";

class Backdrops extends Component {
  state = {
    backdrops: []
  };
  componentDidMount() {
    const { id } = this.props;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=81f382d33088c6d52099a62eab51d967`
    )
      .then(res => res.json())
      .then(data => {
        const backdrop = data.backdrops.map((item, index) => {
          return (
            <li className="backdrop-list" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w1280/${item.file_path}`}
                alt="movie"
                className="backdrop"
              />
            </li>
          );
        });
        this.setState({
          backdrops: backdrop
        });
      });
  }
  render() {
    const { backdrops } = this.state;

    return <div className="backdrops-container">{backdrops}</div>;
  }
}

export default Backdrops;
