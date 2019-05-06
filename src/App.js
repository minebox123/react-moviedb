import React, { Component } from "react";
import Header from "./layout/Header";
import MainContainer from "./MainContainer";
import Footer from "./layout/Footer";
import ActorInfo from "./Actors/ActorInfo";
import MovieInfo from "./MovieInfo";
import SearchResults from "./Search/SearchResults";
import PeopleContainer from "./People/PeopleContainer";
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
          <div className="main-container">
            <Switch>
              <Route exact path="/" component={MainContainer} />
              <Route exacr path="/people" component={PeopleContainer} />
              <Route exact path="/movieInfo/:id" component={MovieInfo} />
              <Route exact path="/actorInfo/:id" component={ActorInfo} />
              <Route
                exact
                path="/results/:userInput"
                component={SearchResults}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
