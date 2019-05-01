import React from "react";

const Slide = props => {
  const { movies } = props;
  return <div className="now-playing-slide">{movies}</div>;
};

export default Slide;
