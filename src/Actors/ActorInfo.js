import React, { Component } from "react";
import AdditionalActorInfo from "./AdditionalActorInfo";

class MovieInfo extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="main-actor">
        <div className="actor">
          <AdditionalActorInfo id={id} />
        </div>
      </div>
    );
  }
}

export default MovieInfo;
