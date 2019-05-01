import React, { Component } from "react";
import Data from "../API/Data";

class NewReleases extends Component {
  render() {
    return (
      <div className="newReleases">
        <h2>New Releases</h2>
        <Data />
      </div>
    );
  }
}

export default NewReleases;
