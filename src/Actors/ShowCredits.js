import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShowCredits extends Component {
  state = {
    showCredits: [],
    isLoading: true
  };
  componentDidMount() {
    const { id } = this.props;

    if (!id) {
      return;
    } else {
      fetch(
        `https://api.themoviedb.org/3/person/${id}/tv_credits?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
      )
        .then(res => res.json())
        .then(data => {
          const showCredits = data.cast
            .sort((a, b) => {
              return (
                b.first_air_date.split("-").join("") -
                a.first_air_date.split("-").join("")
              );
            })
            .map(item => {
              return (
                <li key={item.id} className="credit-list">
                  {item.first_air_date.slice(0, 4)}

                  <p>
                    <Link to={`/showInfo/${item.id}`}>
                      <span>{item.name}</span>
                    </Link>
                    {item.character !== "" ? `as ${item.character}` : null}
                  </p>
                </li>
              );
            });
          this.setState({
            showCredits,
            isLoading: false
          });
        })
        .catch(e => console.log(e));
    }
  }
  render() {
    const { showCredits, isLoading } = this.state;

    return (
      <React.Fragment>
        <ul>{isLoading ? <p>loading</p> : showCredits}</ul>
      </React.Fragment>
    );
  }
}

export default ShowCredits;
