import React from "react";

const Slide = props => {
  const { movies } = props;
  return <div className="top-rated-slide">{movies}</div>;
};

export default Slide;
