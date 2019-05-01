import React, { Component } from "react";

class Cast extends Component {
  state = {
    cast: []
  };
  componentDidMount() {
    const { id } = this.props;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=81f382d33088c6d52099a62eab51d967`
    )
      .then(res => res.json())
      .then(data => {
        const actor = data.cast.slice(0, 5).map(item => {
          return (
            <li className="actor-list" key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.name}
              />
              <h4>{item.name}</h4>
              <p>{item.character}</p>
            </li>
          );
        });
        this.setState({
          cast: actor
        });
      });
  }
  render() {
    const { cast } = this.state;
    return (
      <div className="cast">
        <h2>Top Billed Cast</h2>
        <div className="actor-container">{cast}</div>
      </div>
    );
  }
}

export default Cast;
