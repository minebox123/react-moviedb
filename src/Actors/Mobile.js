import React, { Component } from "react";
import parse from "html-react-parser";

class Mobile extends Component {
  state = {
    isClosed: false
  };

  onArrowClick = () => {
    this.setState({
      isClosed: !this.state.isClosed
    });
  };
  render() {
    const { item } = this.props;
    const { isClosed } = this.state;

    return (
      <div className="mobile">
        <section className="mobile__content">
          <div className="mobile__actor-information">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
              alt={item.name}
            />
            <div className="mobile__actor-information text-facts">
              <h2>{item.name}</h2>
              <p>
                Birthday <span>{item.birthday}</span>
              </p>
              {item.deathday ? (
                <p>
                  Day of Death <span>{item.deathday}</span>
                </p>
              ) : null}
              <p>
                Place of birth <span>{item.place_of_birth}</span>
              </p>
            </div>
          </div>
          <div className="mobile__actor-biography" onClick={this.onArrowClick}>
            <h2>
              Biography <i className="fas fa-angle-down" />
            </h2>
            {isClosed ? (
              <div className="mobile__actor-biography drop-down">
                {parse(item.biography)}
              </div>
            ) : null}
          </div>
        </section>
      </div>
    );
  }
}

export default Mobile;
