import React from "react";
import "../Style/guest.css";
import Tabs from "./Tabs";
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
              Settings <i className="fas fa-cog" />
            </p>
          </div>
        </section>
        <section className="user-activity">
          <Tabs>
            <div label="Overview">
              <p>
                This page has been created to show users how the page works in a
                real project.
              </p>
            </div>
            <div label="Watchlist">
              <h2>My Watchlist</h2>
              <p>You haven't added any movies or TV shows to your watchlist.</p>
            </div>
            <div label="Lists">
              <h2>Lists</h2>
              <p>You haven't created any lists.</p>
            </div>
            <div label="Favorites">
              <h2>My Favorites</h2>
              <p>You haven't added any favorite movies or TV shows.</p>
            </div>
            <div label="Recomendations">
              <h2>My Recommendations</h2>
              <p>
                We don't have enough data to suggest any recommendations. Try
                adding a few more favorites (the more the better) and come back
                to see how we ded.
              </p>
            </div>

            <div label="Ratings &#38; Reviews">
              <h2>My Rating</h2>
              <p>You haven't rated any movies or TV shows.s</p>
            </div>
          </Tabs>
        </section>
      </div>
    </div>
  );
};

export default Guest;

/* <div className="activity">
              <ul className="tab">
                <li className="tablinks" id="defaultOpen">
                  Watchlist
                </li>
                <li className="tablinks" onclick="openTab(e, 'watchlist')">
                  Lists
                </li>
                <li className="tablinks">Favorites</li>
                <li className="tablinks">Recommendations</li>
                <li className="tablinks">Ratings &#38; Reviews</li>
              </ul>
              <div id="watchlist" className="tabcontent">
                hwllo
              </div>
              <div id="lists" className="tabcontent">
                bue
              </div>
              <div id="favorites" className="tabcontent">
                name
              </div>
              <div id="recommendations" className="tabcontent">
                opacity
              </div>
              <div id="ratings" className="tabcontent">
                john
              </div>
            </div> */
