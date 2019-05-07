import React from "react";

const Slide = props => {
  const { show } = props;
  return <div className="slide">{show}</div>;
};

export default Slide;
