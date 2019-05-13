import React from "react";
import "../Style/guest.css";
import cat from "./cat.png";

const Guest = () => {
  return (
    <div className="guest-login">
      <div className="guest-container">
        <section className="user-profile">
          <img src={cat} alt="a cat is near the water" />
          <h1>
            John Doe <span>Member since May 2019</span>
          </h1>
          <div>
            <h4>
              Email:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com"
              >
                john.doe@gamil.com
              </a>
            </h4>
            <h4>
              Facebook:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/"
              >
                John Doe
              </a>
            </h4>
            <p>
              Settings <i class="fas fa-cog" />
            </p>
          </div>
        </section>
        <section className="user-activity">
          <div className="user-watchlist">
            <div className="activity">
              <ul>
                <li>Watchlist</li>
                <li>Lists</li>
                <li>Favorites</li>
                <li>Recommendations</li>
                <li>Ratings &#38; Reviews</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Guest;
