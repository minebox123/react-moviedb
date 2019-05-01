import React, { Component } from "react";
import Slide from "./Slide";
import { LeftArrow, RightArrow } from "./Arrows";

let movieArr = [];
class Slider extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0
  };

  createNestedArray = () => {
    while (this.props.movies.length) {
      movieArr.push(this.props.movies.splice(0, 5));
    }
    return movieArr.map((item, i) => {
      return <Slide key={i} movies={item} />;
    });
  };

  nextPic = () => {
    if (this.state.currentIndex === movieArr.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue - this.slideWidth()
    }));
  };

  prevPic = () => {
    if (this.state.currentIndex === movieArr.length + 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    } else if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".top-rated-slide").clientWidth;
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="top-rated-carousel"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.createNestedArray()}
        </div>
        <LeftArrow prevPic={this.prevPic} />
        <RightArrow nextPic={this.nextPic} />
      </React.Fragment>
    );
  }
}

export default Slider;
