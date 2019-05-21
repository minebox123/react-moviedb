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
            <Route path="/tv" exact component={TV} />
            <Route path="/people" exact component={PeopleContainer} />
            <Route path="/login" exact component={Login} />
            <Route path="/movieInfo/:id" exact component={MovieInfo} />
            <Route path="/showInfo/:id" exact component={ShowInfo} />
            <Route path="/actorInfo/:id" exact component={ActorInfo} />
            <Route path="/results/:userInput" exact component={SearchResults} />
            <Route exact path="/guestPage" component={Guest} />
          </Switch>
          <Route path="/" exact component={MainContainer} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
