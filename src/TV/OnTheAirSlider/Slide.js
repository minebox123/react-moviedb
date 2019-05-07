import React from "react";

const Slide = props => {
  const { show } = props;
  return <div className="on-air-slide">{show}</div>;
};

export default Slide;
