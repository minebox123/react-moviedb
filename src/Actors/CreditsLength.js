import React, { Component } from "react";

class CreditsLength extends Component {
  state = {
    number: null
  };
  componentDidMount() {
    const { id } = this.props;
    if (!id) {
      return;
    } else {
      fetch(
        `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=81f382d33088c6d52099a62eab51d967&language=en-US`
      )
        .then(res => res.json())
        .then(data =>
          this.setState({
            number: data.cast.length
          })
        );
    }
  }
  render() {
    const { number } = this.state;
    return <p>{number}</p>;
  }
}

export default CreditsLength;
