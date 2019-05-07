import React, { Component } from "react";

class Video extends Component {
  state = {
    youtube: []
  };

  componentDidMount() {
    const { id } = this.props;
    if (!id) {
      return;
    } else {
      fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
      )
        .then(res => res.json())
        .then(data =>
          this.setState({
            youtube: data.results
          })
        );
    }
  }
  render() {
    const video = this.state.youtube.map((item, i) => {
      return (
        <div className="video-slide">
          <iframe
            className="youtube"
            src={`https://www.youtube.com/embed/${item.key}`}
            title={item.title}
            frameBorder="0"
            allowFullScreen
            key={i}
          />
        </div>
      );
    });
    const newestTrailer = video[video.length - 1];

    return <React.Fragment>{newestTrailer}</React.Fragment>;
  }
}

export default Video;
