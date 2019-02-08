import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import './reservation.scss';

class GymDetails extends Component {

    render() {
        return (
            <div className="gym__container">
                <h5 className="gym__container__title">{this.props.gym.name} <Link className="gym__container__link" to={`/h/${this.props.gym.id}`}>See more</Link></h5>
                <p className="gym__container__description">
                    <StarRatingComponent className="details__rating" name="star" starCount={5} value={this.props.gym.stars} starColor={'rgb(61, 162, 196)'} emptyStarColor={'rgb(168, 168, 168)'} />
                    ${this.props.gym.price} per day
                </p>
                <p className="gym__container__description">{this.props.gym.description}</p>
            </div>
        );
    }
}



export default (GymDetails);
