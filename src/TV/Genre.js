import React, { Component } from "react";

class Genre extends Component {
  state = {
    id: this.props.genresIds,
    name: ""
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        let genre = data.genres.map(item => {
          if (this.state.id === item.id) {
            return item.name;
          } else {
            return null;
          }
        });

        this.setState({
          name: genre
        });
      });
  }

  render() {
    const { name } = this.state;
    return <div className="genre">{name} | Rating</div>;
  }
}

export default Genre;
