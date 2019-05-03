import React, { Component } from "react";
import ShowCredits from "./ShowCredits";
import { Link } from "react-router-dom";

class CombinedCredits extends Component {
  state = {
    movieCredits: [],
    isMovieClicked: true,
    isShowClicked: false,
    id: null
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
  componentWillReceiveProps(prevState) {
    const { id } = prevState;
    if (!id) {
      return;
    } else {
      fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const id = data.id;
          const movieCredits = data.cast
            .filter(
              item =>
                item.release_date !== "" &&
                !item.first_air_date &&
                item.release_date !== undefined
            )
            .sort((a, b) => {
              return (
                b.release_date.split("-").join("") -
                a.release_date.split("-").join("")
              );
            })
            .map(item => {
              return (
                <li key={item.id} className="credit-list">
                  {item.release_date.slice(0, 4)}

                  <p>
                    <Link to={`/movieInfo/${item.id}`}>
                      <span>{item.title}</span>
                    </Link>
                    {item.character !== "" ? `as ${item.character}` : null}
                  </p>
                </li>
              );
            });
          this.setState({
            movieCredits,
            id
          });
        })
        .catch(e => console.log(e));
    }
  }
  render() {
    const { movieCredits, isShowClicked, isMovieClicked, id } = this.state;

    return (
      <div>
        <div className="buttons">
          <button onClick={this.onMovieClick}>Movies</button>
          <button onClick={this.onShowClick}>TV Shows</button>
        </div>
        {isMovieClicked ? (
          <ul>{movieCredits}</ul>
        ) : isShowClicked ? (
          <ShowCredits id={id} />
        ) : null}
      </div>
    );
  }
}

export default CombinedCredits;
