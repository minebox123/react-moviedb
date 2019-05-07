import React from "react";
import TVtrending from "./TVtrending";
import OnTheAir from "./OnTheAirSlider/OnTheAir";
import AiringToday from "./AiringToday/AiringToday";
import Trailer from "./Trailers/Trailer";
import TopRated from "./TopRated/TopRated";
import "../Style/tv.css";

const TV = () => {
  return (
    <React.Fragment>
      <TVtrending />
      <OnTheAir />
      <AiringToday />
      <Trailer />
      <TopRated />
    </React.Fragment>
  );
};

export default TV;
