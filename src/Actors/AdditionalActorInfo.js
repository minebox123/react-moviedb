import React, { Component } from "react";
import List from "./List";

class AdditionalActorInfo extends Component {
  state = {
    actor: []
  };

  componentDidMount() {
    const { id } = this.props;
    if (!id) {
      return;
    } else {
      fetch(
        `https://api.themoviedb.org/3/person/${id}?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({
            actor: data
          });
        });
    }
  }
  render() {
    const { actor } = this.state;
    console.log(actor);
    return (
      <div className="actorInfo-container">
        <section className="personalInfo">
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
            width="300px"
            height="450px"
          />
          <div className="facts">
            <h2>Personal info</h2>
            <List actor={actor} />
          </div>
        </section>
        <section className="mainInfo">
          <div className="bio">
            <h1>{actor.name}</h1>
            <p>{actor.biography}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default AdditionalActorInfo;
