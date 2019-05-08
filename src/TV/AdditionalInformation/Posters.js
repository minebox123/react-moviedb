import React, { Component } from "react";

class Posters extends Component {
  state = {
    posters: []
  };
  componentDidMount() {
    const { id } = this.props;
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=81f382d33088c6d52099a62eab51d967`
    )
      .then(res => res.json())
      .then(data => {
        const poster = data.posters
          .filter(item => item.iso_639_1 === "en")
          .map((item, index) => {
            return (
              <li className="poster-list" key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.file_path}`}
                  alt="movie"
                  className="poster"
                />
              </li>
            );
          });
        this.setState({
          posters: poster
        });
      });
  }
  render() {
    const { posters } = this.state;

    return <div className="posters-container">{posters}</div>;
  }
}

export default Posters;
