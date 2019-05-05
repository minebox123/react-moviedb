import React, { Component } from "react";
import MovieSearch from "./MoiveSearch";
import ShowSearch from "./ShowSearch";
import PeopleSearch from "./PepleSearch";

class Results extends Component {
  render() {
    const { query } = this.props;
    return (
      <div className="search-results-container">
        <section className="search-options">
          <nav>
            <ul>
              <li>
                <h3>Movies</h3>
              </li>
              <li>
                <h3>TV Shows</h3>
              </li>
              <li>
                <h3>Pople</h3>
              </li>
            </ul>
          </nav>
        </section>
        <section className="search-results">
          <ul>
            <li>
              <MovieSearch query={query} />
            </li>
            <li>
              <ShowSearch />
            </li>
            <li>
              <PeopleSearch />
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default Results;
