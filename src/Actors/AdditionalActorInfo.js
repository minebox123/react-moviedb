import React, { Component } from "react";
import List from "./List";
import Socials from "./Socials";
import home from "../icons/ActorSocialMedia/icon.svg";
import MovieCredits from "./MovieCredits";
import ShowCredits from "./ShowCredits";
import show from "../icons/show.svg";

class AdditionalActorInfo extends Component {
  state = {
    actor: [],
    isMovieClicked: true,
    isShowClicked: false,
    isClicked: false
  };

  onClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };
  onMovieClick = () => {
    this.setState({
      isMovieClicked: true,
      isShowClicked: false
    });
  };

  onShowClick = () => {
    this.setState({
      isShowClicked: true,
      isMovieClicked: false
    });
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
    const { actor, isShowClicked, isMovieClicked } = this.state;

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
            <List actor={actor} id={this.props.id} />
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
            <h2>Biography</h2>
            <div className="biography">
              {actor.biography !== undefined ? (
                actor.biography.length > 550 ? (
                  <div className="showMore">
                    <span>{actor.biography.slice(0, 500)}...</span>
                    <img
                      src={show}
                      alt="show more icon"
                      onClick={this.onClick}
                    />
                    {this.state.isClicked ? (
                      <div className="biography-container">
                        <div className="biography-header">
                          <h3>Biography</h3>
                          <i className="fas fa-times" onClick={this.onClick} />
                        </div>
                        <p>{actor.biography}</p>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  actor.biography
                )
              ) : null}
            </div>
          </div>
          <div className="acting">
            <div className="list-header">
              <h2>{actor.known_for_department}</h2>
              <div className="buttons">
                <button className="showButton" onClick={this.onShowClick}>
                  TV Shows
                </button>
                <button className="movieButton" onClick={this.onMovieClick}>
                  Movies
                </button>
              </div>
            </div>
            <section className="combined-credits">
              {isMovieClicked ? (
                <MovieCredits id={this.props.id} />
              ) : isShowClicked ? (
                <ShowCredits id={this.props.id} />
              ) : null}
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default AdditionalActorInfo;
