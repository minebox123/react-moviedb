import React, { Component } from "react";
import avatar from "../icons/avatar.svg";

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
        `https://api.themoviedb.org/3/search/person?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&query=${query}&page=1&include_adult=false`
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
      <div className="search-results-people">
        <ul>
          {results.map(item => {
            return (
              <li key={item.id}>
                {item.profile_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                    alt={item.title}
                    width="185px"
                    height="277.50px"
                  />
                ) : (
                  <div className="no-image">
                    <img src={avatar} alt={item.title} />
                  </div>
                )}
                <div className="person-description">
                  <h3>{item.name}</h3>
                  <div className="known-for">
                    <ul>
                      <h3>Known for:</h3>
                      {item.known_for.map(item => {
                        return (
                          <li key={item.id}>
                            <p>{item.title}</p>
                          </li>
                        );
                      })}
                    </ul>
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
