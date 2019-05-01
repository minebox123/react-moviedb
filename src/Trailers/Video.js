import React, { Component } from "react";

class Video extends Component {
  state = {
    id: this.props.movieId,
    youtube: []
  };

  componentDidMount() {
    const { id } = this.state;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        const video = data.results.map((item, i) => {
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
        this.setState({
          youtube: video[0]
        });
      });
  }
  render() {
    const { youtube } = this.state;
    return <React.Fragment>{youtube}</React.Fragment>;
  }
}

export default Video;
