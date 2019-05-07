import React, { Component } from "react";
import Slide from "./Slide";
import { LeftArrow, RightArrow } from "./Arrows";

let showArr = [];
class Slider extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0
  };

  createNestedArray = () => {
    while (this.props.air.length) {
      showArr.push(this.props.air.splice(0, 5));
    }
    return showArr.map((item, i) => {
      return <Slide key={i} show={item} />;
    });
  };

  nextPic = () => {
    if (this.state.currentIndex === showArr.length - 1) {
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
    if (this.state.currentIndex === showArr.length + 1) {
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
    return document.querySelector(".on-air-slide").clientWidth;
  };
  render() {
    return (
      <React.Fragment>
        <div
          className="on-air-carousel"
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
