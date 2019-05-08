import React, { Component } from "react";

class Videos extends Component {
  state = {
    videos: [],
    isActive: false
  };

  toggleClass = () => {};
  componentDidMount() {
    const { id } = this.props;
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const video = data.results
          .filter(item => item.type === "Trailer")
          .reverse()
          .map(item => {
            return (
              <li key={item.key} className="video-list">
                <iframe
                  className="video"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title={item.name}
                  frameBorder="0"
                  allowFullScreen
                />
              </li>
            );
          });
        this.setState({
          videos: video
        });
      });
  }
  render() {
    const { videos } = this.state;
    return <div className="video-container">{videos}</div>;
  }
}

export default Videos;
