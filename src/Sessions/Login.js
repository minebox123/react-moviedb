import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Style/login.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="login">
        <div className="login-container">
          <section className="laptop-image">
            <div
              onMouseEnter={this.handleMouseEnter}
              onMouseMove={this.handleMouseMove}
              onMouseLeave={this.handleMouseLeave}
            >
              <img
                src="https://colorlib.com/etc/lf/Login_v1/images/img-01.png"
                alt="laptop icon"
              />
            </div>
          </section>
          <section className="login-form">
            <form>
              <h2>Member Login</h2>
              <div className="email-container">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="email"
                  value={this.state.email}
                  onChange={this.onHandleChange}
                />

                <i className="fas fa-envelope" />
              </div>
              <div className="password-container">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="password"
                  value={this.state.password}
                  onChange={this.onHandleChange}
                />
                <i className="fas fa-lock" />
              </div>
              <button
                type="submit"
                className="log-button"
                onSubmit={this.onSubmit}
              >
                LOGIN
              </button>
            </form>
            <div className="guest">
              <Link to="/guestPage">
                <p>Sign in as Guest</p>
                <i class="fas fa-sign-in-alt" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Login;
