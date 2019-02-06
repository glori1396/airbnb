import React, { Component } from 'react';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';
import './places.scss';
import StarRatingComponent from 'react-star-rating-component';


class Home extends Component {

    render() {
        return (
            <Link className="home" to={`${this.props.match.url}/${this.props.home.id}`} >
                <Carousel media={this.props.home.media} />
                <h3 className="home__title">{this.props.home.name}</h3>
                <p className="home__description">${this.props.home.price} per night</p>
                <StarRatingComponent starCount={5} value={this.props.home.stars} starColor={'rgb(61, 162, 196)'} emptyStarColor={'rgb(168, 168, 168)'} />
            </Link >
        );
    }
}


export default (Home);
