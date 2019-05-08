import React, { Component } from "react";
import AdditionalInfo from "./AdditionalInfo";

class MovieInfo extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <AdditionalInfo id={id} />
      </div>
    );
  }
}

export default MovieInfo;
