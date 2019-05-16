import React, { Component } from "react";
import popcorn from "../icons/popcorn.svg";
import { Link } from "react-router-dom";

import "../style.css";

class Header extends Component {
  state = {
    isClicked: false,
    width: window.innerWidth,
    search: ""
  };

  onClick = () =>
    this.setState({
      isClicked: !this.state.isClicked
    });

  onChange = e =>
    this.setState({
      search: e.target.value
    });

  onSearchClick = () => {
    this.setState({
      search: ""
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  updateWidth = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  componentWillUnmount() {
    window.addEventListener("resize", this.updateWidth);
  }

  render() {
    const { width } = this.state;
    const { isClicked } = this.state;
    const ifLess = width < 820;
    return (
      <div className="header">
        {!ifLess ? (
          <div className="content">
            <div className="logo">
              <img src={popcorn} alt="" />
              <h3>MovieDB</h3>
            </div>

            <ul className="list">
              <li>
                <Link to="/" className="link">
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/tv" className="link">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link to="/people" className="link">
                  People
                </Link>
              </li>
              <li>
                <Link to="/login" className="link">
                  Login
                </Link>
              </li>
              <li>
                {!isClicked ? (
                  <div className="search-box">
                    <i className="fas fa-search" onClick={this.onClick} />
                  </div>
                ) : (
                  <div className="search-box">
                    <i className="fas fa-search" onClick={this.onClick} />

                    <div className="input-box">
                      <input
                        type="text"
                        placeholder="Search..."
                        onChange={this.onChange}
                        value={this.state.search}
                      />
                      <Link to={`/results/${this.state.search}`}>
                        <button type="submit" onClick={this.onSearchClick}>
                          <i className="fas fa-arrow-right" />
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        ) : (
          <div className="content">
            <div className="logo">
              <img src={popcorn} alt="" />
              <h3>MovieDB</h3>
            </div>

            <div className="menu-wrap">
              <input type="checkbox" className="toggler" />
              <div className="hamburger">
                <div />
              </div>
              <div className="menu">
                <div>
                  <div>
                    <ul>
                      <li>
                        <Link to="/" className="link">
                          Movies
                        </Link>
                      </li>
                      <li>
                        <Link to="/tv" className="link">
                          TV Shows
                        </Link>
                      </li>
                      <li>
                        <Link to="/people" className="link">
                          People
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
