import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class RatingSystem extends React.Component {

  constructor(props){
    super(props);

    this.state={
      rating: 0
    }
  }



  updateRating() {
    let user = JSON.parse(localStorage.getItem('user'));
    var requestUrl = 'https://questdb.herokuapp.com/all/'
    var id = user._id
    fetch(requestUrl + this.props.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({rating: this.state.actualRating, ratingCount: this.state.newRatingCount})
      }, () => {


    })

  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({actualRating: this.props.ratingStars + nextValue,
                  newRatingCount: this.props.ratingCount + 1

      }, () => {

          this.updateRating();

      });

    }

    render() {

      return (
        <StarRatingComponent
          value={this.props.ratingStars / this.props.ratingCount}
          onStarClick={this.props.onStarClick.bind(this)}
          starCount={5}
          name='rating'
        />
      );
    }
}
export default RatingSystem;
