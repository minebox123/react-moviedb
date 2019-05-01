import React from "react";

const Slide = props => {
  const { movieGroup } = props;
  return <div className="new-releases-slide">{movieGroup}</div>;
};

export default Slide;
