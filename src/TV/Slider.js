import React, { Component } from "react";
import Slide from "./Slide";

class Slider extends Component {
  state = {
    currentIndex: 0,
    translateValue: 0
  };

  componentDidMount() {
    setInterval(() => {
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
    }, 4000);
  }

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
            transition: "transform ease-out 2s"
          }}
        >
          {this.props.shows.map((item, i) => (
            <Slide key={i} show={item} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Slider;
