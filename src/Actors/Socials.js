import React, { Component } from "react";
import facebook from "../icons/ActorSocialMedia/facebook.svg";
import twitter from "../icons/ActorSocialMedia/twitter.svg";
import instagram from "../icons/ActorSocialMedia/instagram.svg";

class Socials extends Component {
  state = {
    socials: []
  };
  componentWillReceiveProps(prevProp) {
    const { id } = prevProp;
    fetch(
      `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          socials: data
        })
      );
  }
  render() {
    const { socials } = this.state;

    return (
      <div className="actor-social-media">
        <ul>
          {socials.instagram_id !== null ? (
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.instagram.com/${socials.instagram_id}`}
              >
                <img src={instagram} alt="instagram icon" />
              </a>
            </li>
          ) : null}
          {socials.facebook_id !== null ? (
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.facebook.com/${socials.facebook_id}`}
              >
                <img src={facebook} alt="facebook icon" />
              </a>
            </li>
          ) : null}
          {socials.twitter_id !== null ? (
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/${socials.twitter_id}`}
              >
                <img src={twitter} alt="twitter icon" />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    );
  }
}

export default Socials;
