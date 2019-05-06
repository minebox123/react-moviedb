import React, { Component } from "react";
import noimage from "../icons/noimage.svg";

class MoiveSearch extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    const { query } = this.props;
    if (!query) {
      return;
    } else {
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&query=${query}&page=1&include_adult=false`
      )
        .then(res => res.json())
        .then(data =>
          this.setState({
            results: data.results
          })
        );
    }
  }
  render() {
    const { results } = this.state;
    return (
      <div className="search-results-movie">
        <ul>
          {results.map(item => {
            return (
              <li key={item.id}>
                {item.poster_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.title}
                    width="185px"
                    height="278px"
                  />
                ) : (
                  <div className="no-image">
                    <img src={noimage} alt={item.title} width="100px" />
                  </div>
                )}
                <div className="movie-text-container">
                  <div className="movie-description">
                    <h3>{item.name}</h3>
                    <span>Release date: {item.first_air_date}</span>

                    {item.overview.length > 300 ? (
                      <p>{item.overview.slice(0, 250)}...</p>
                    ) : (
                      <p>{item.overview}</p>
                    )}
                  </div>

                  <p className="show-more">Show more</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default MoiveSearch;
