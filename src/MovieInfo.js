import React, { Component } from "react";
import AdditionalInfo from "./AdditionalInformation/AdditionalInfo";

export default class MovieInfo extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <AdditionalInfo id={id} />
      </div>
    );
  }
}
