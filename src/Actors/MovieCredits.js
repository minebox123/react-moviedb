import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCredits extends Component {
  state = {
    movieCredits: [],
    isLoading: true
  };

  componentDidMount() {
    const { id } = this.props;
    if (!id) {
      return;
    } else {
      fetch(
        `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
      )
        .then(res => res.json())
        .then(data => {
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
            isLoading: false
          });
        })
        .catch(e => console.log(e));
    }
  }
  render() {
    const { movieCredits, isLoading } = this.state;

    return (
      <React.Fragment>
        <ul>{isLoading ? <p>loading</p> : movieCredits}</ul>
      </React.Fragment>
    );
  }
}

export default MovieCredits;
