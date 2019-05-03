import React, { Component } from "react";
import List from "./List";
import Socials from "./Socials";
import home from "../icons/ActorSocialMedia/icon.svg";
import CombinedCredits from "./CombinedCredits";

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
            <div className="name-socials">
              <h1>{actor.name}</h1>
              <ul>
                <li>
                  <Socials id={actor.id} />
                </li>
                {actor.homepage !== null ? (
                  <li>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={actor.homepage}
                    >
                      <img src={home} className="home" alt="home page icon" />
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>

            <p>{actor.biography}</p>
          </div>
          <section className="combined-credits">
            <CombinedCredits id={actor.id} />
          </section>
        </section>
      </div>
    );
  }
}

export default AdditionalActorInfo;
