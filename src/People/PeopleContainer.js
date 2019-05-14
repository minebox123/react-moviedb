import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Style/people.css";

class PeopleContainer extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          people: data.results
        })
      );
  }
  render() {
    const { people } = this.state;
    return (
      <div className="people">
        <div className="people-container">
          <h2>Popular people</h2>
          <ul>
            {people.map(person => {
              return (
                <li key={person.id}>
                  <div className="person-image">
                    <Link to={`/actorInfo/${person.id}`}>
                      <div className="overlay">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${
                            person.profile_path
                          }`}
                          alt={person.name}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="person-name">
                    <h3>{person.name}</h3>
                    <div className="known">
                      {person.known_for.slice(0, 2).map(item => {
                        return <p key={item.id}>{item.title || item.name}</p>;
                      })}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default PeopleContainer;
