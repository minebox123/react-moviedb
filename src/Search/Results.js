import React, { Component } from "react";
import MovieSearch from "./MoiveSearch";
import ShowSearch from "./ShowSearch";
import PeopleSearch from "./PeopleSearch";

class Results extends Component {
  state = {
    isMovieClicked: true,
    isShowClicked: false,
    isPersonClicked: false
  };

  onMovieClick = () => {
    this.setState({
      isMovieClicked: true,
      isShowClicked: false,
      isPersonClicked: false
    });
  };

  onShowClick = () => {
    this.setState({
      isMovieClicked: false,
      isShowClicked: true,
      isPersonClicked: false
    });
  };

  onPersonClick = () => {
    this.setState({
      isMovieClicked: false,
      isShowClicked: false,
      isPersonClicked: true
    });
  };
  render() {
    const { query } = this.props;
    const { isMovieClicked, isShowClicked, isPersonClicked } = this.state;
    return (
      <div className="search-results-container">
        <section className="search-options">
          <nav>
            <ul>
              <li>
                <h3 onClick={this.onMovieClick}>Movies</h3>
              </li>
              <li>
                <h3 onClick={this.onShowClick}>TV Shows</h3>
              </li>
              <li>
                <h3 onClick={this.onPersonClick}>People</h3>
              </li>
            </ul>
          </nav>
        </section>
        <section className="search-results">
          {isMovieClicked ? (
            <MovieSearch query={query} />
          ) : isShowClicked ? (
            <ShowSearch query={query} />
          ) : isPersonClicked ? (
            <PeopleSearch query={query} />
          ) : null}
        </section>
      </div>
    );
  }
}

export default Results;
