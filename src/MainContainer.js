import React from "react";
import NewReleases from "./layout/NewReleases";
import Trending from "./API/Trending";
import NowPlaying from "./Now playing/NowPlaying";
import Trailer from "./Trailers/Trailer";
import TopRated from "./TopRated/TopRated";

export default function MainContainer() {
  return (
    <React.Fragment>
      <Trending />
      <NewReleases />
      <NowPlaying />
      <Trailer />
      <TopRated />
    </React.Fragment>
  );
}
