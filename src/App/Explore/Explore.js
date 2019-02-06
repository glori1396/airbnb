import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './explore.scss';

class Explore extends Component {
    render() {
        return (
            <div className="explore">
                <h2>Explore Airbnb + Fitness</h2>
                <div className="explore__cards">
                    <Link to={`${this.props.match.url}/homes`} className="explore__cards__item">
                        <div className="explore__cards__item__image img--house" />
                        <div className="explore__cards__item__text">
                            <p>Homes</p>
                        </div>
                    </Link >
                    <Link to={`${this.props.match.url}/gyms`} className="explore__cards__item">
                        <div className="explore__cards__item__image img--gym" />
                        <div className="explore__cards__item__text">
                            <p>Fitness</p>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Explore;
