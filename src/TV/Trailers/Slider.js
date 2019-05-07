import React, { Component } from "react";
import { RightArrow, LeftArrow } from "./Arrows";

class Slider extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0
  };

  nextPic = () => {
    if (this.state.currentIndex === this.props.youtube.length - 1) {
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
    if (this.state.currentIndex === this.props.youtube.length + 1) {
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
    return document.querySelector(".video-slide").clientWidth;
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="trailer-carousel"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s"
          }}
        >
          {this.props.youtube}
        </div>
        <LeftArrow prevPic={this.prevPic} />
        <RightArrow nextPic={this.nextPic} />
      </React.Fragment>
    );
  }
}

export default Slider;
