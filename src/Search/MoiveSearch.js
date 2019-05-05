import React, { Component } from "react";

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
        `https://api.themoviedb.org/3/search/movie?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&query=${query}&page=1&include_adult=false`
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
    console.log(results);
    return (
      <div className="search-results-movie">
        <ul>
          {results.map(item => {
            return (
              <li key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  width="185px"
                  height="278px"
                />
                <div className="movie-desription">
                  <h3>{item.title}</h3>
                  <span>{item.release_date}</span>

                  {item.overview.length > 300 ? (
                    <p>{item.overview.slice(0, 250)}...</p>
                  ) : (
                    <p>{item.overview}</p>
                  )}
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
