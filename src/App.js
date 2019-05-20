import React, { Component } from "react";
import Header from "./layout/Header";
import MainContainer from "./MainContainer";
import Footer from "./layout/Footer";
import ActorInfo from "./Actors/ActorInfo";
import MovieInfo from "./MovieInfo";
import ShowInfo from "./TV/AdditionalInformation/ShowInfo";
import SearchResults from "./Search/SearchResults";
import PeopleContainer from "./People/PeopleContainer";
import Login from "./Sessions/Login";
import TV from "./TV/TV";
import Guest from "./Sessions/Guest";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./JavaScript/index.js";
import "./style.css";
import "./media-query.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <div className="main-container">
              <Route exact path="/" component={MainContainer} />
              <Route exact path="/tv" component={TV} />
              <Route exact path="/people" component={PeopleContainer} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/movieInfo/:id" component={MovieInfo} />
              <Route exact path="/showInfo/:id" component={ShowInfo} />
              <Route exact path="/actorInfo/:id" component={ActorInfo} />
              <Route
                exact
                path="/results/:userInput"
                component={SearchResults}
              />
              <Route exact path="/guestPage" component={Guest} />
            </div>
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
