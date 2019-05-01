import React from "react";


const Slide = props => {
  const { movie } = props;
  return (
    <div className="slide">
      {movie}
    </div>
  );
};

export default Slide;

