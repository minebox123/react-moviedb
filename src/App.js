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
        <Route path="/">
          <div className="App">
            <Header />
            <div className="main-container">
              <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route path="/tv" component={TV} />
                <Route path="/people" component={PeopleContainer} />
                <Route path="/login" component={Login} />
                <Route path="/movieInfo/:id" component={MovieInfo} />
                <Route path="/showInfo/:id" component={ShowInfo} />
                <Route path="/actorInfo/:id" component={ActorInfo} />
                <Route path="/results/:userInput" component={SearchResults} />
                <Route exact path="/guestPage" component={Guest} />
              </Switch>
            </div>
          </div>
          <Footer />
        </Route>
      </Router>
    );
  }
}

export default App;
