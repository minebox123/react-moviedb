import React, { Component } from "react";
import avatar from "../icons/avatar.svg";
import { Link } from "react-router-dom";

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
                  <div className="no-image-person">
                    <img src={avatar} alt={item.title} />
                  </div>
                )}
                <div className="person-description">
                  <div className="person-description-container">
                    <h3>{item.name}</h3>
                    <div className="known-for">
                      <ul>
                        <h3>Known for:</h3>
                        {item.known_for.map(item => {
                          return (
                            <li key={item.id}>
                              <Link to={`/movieInfo/${item.id}`}>
                                <p>{item.title}</p>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <Link to={`/actorInfo/${item.id}`}>
                    <p className="show-more-person">Show more</p>
                  </Link>
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
