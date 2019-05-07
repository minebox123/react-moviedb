import React, { Component } from "react";
import Slide from "./Slide";
import { LeftArrow, RightArrow } from "./Arrows";

class Slider extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0
  };

  nextPic = () => {
    if (this.state.currentIndex === this.props.shows.length - 1) {
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
    if (this.state.currentIndex === this.props.shows.length + 1) {
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
    return document.querySelector(".slide").clientWidth;
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.props.shows.map((item, i) => (
            <Slide key={i} show={item} />
          ))}
        </div>

        <LeftArrow prevPic={this.prevPic} />
        <RightArrow nextPic={this.nextPic} />
      </React.Fragment>
    );
  }
}

export default Slider;
