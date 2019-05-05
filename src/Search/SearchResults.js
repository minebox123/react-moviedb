import React, { Component } from "react";
import Results from "./Results";
import "../Style/search.css";

class SearchResults extends Component {
  render() {
    const { userInput } = this.props.match.params;
    return (
      <div className="main-search-results-container">
        <Results query={userInput} />
      </div>
    );
  }
}

export default SearchResults;
