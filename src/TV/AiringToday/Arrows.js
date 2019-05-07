import React from "react";

export const RightArrow = props => {
  return (
    <div className="airing-right" onClick={props.nextPic}>
      <i className="fas fa-chevron-right fa-2x" aria-hidden="true" />
    </div>
  );
};

export const LeftArrow = props => {
  return (
    <div className="airing-left" onClick={props.prevPic}>
      <i className="fas fa-chevron-left fa-2x" aria-hidden="true" />
    </div>
  );
};
