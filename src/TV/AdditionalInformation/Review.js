import React, { Component } from "react";

class Review extends Component {
  state = {
    reviews: [],
    title: this.props,
    isHidden: false,
    id: this.props.id
  };

  componentDidMount() {
    const { id } = this.state;
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        const review = data.results.slice(0, 10).map(item => {
          if (item.length !== 0) {
            return (
              <li className="review-list" key={item.id}>
                <h3>
                  A review by <span>{item.author}</span>
                </h3>
                <p>
                  {item.content.slice(0, 600)}...
                  <a href={item.url}>continue reading</a>
                </p>
              </li>
            );
          } else {
            return <p>{this.state.name}</p>;
          }
        });
        this.setState({
          reviews: review
        });
      });
  }
  render() {
    const { reviews } = this.state;

    return (
      <div className="review-container">
        <h2>Social</h2>
        {reviews}
      </div>
    );
  }
}

export default Review;
