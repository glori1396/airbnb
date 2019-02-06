import React, { Component } from 'react';
import './reservation.scss';
import Carousel from '../Places/Carousel';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import Amenities from './Amenities';
import Owner from './Owner';
import ForReservation from './ForReservation'


class PlaceDetails extends Component {

    constructor() {
        super()
        this.state = {
            city: "",
            country: "",
            reservation: {}
        }
    }

    componentDidMount() {
        const reservation = this.props.homes.find(home => home.id === parseInt(this.props.match.params.idPlace));
        const city = this.props.cities.find(city => city.id === reservation.idCity);
        const country = this.props.countries.find(country => country.id === reservation.idCountry);
        this.setState({ city: city.city, country: country.country })
    }


    render() {
        const reservation = this.props.homes.find(home => home.id === parseInt(this.props.match.params.idPlace));
        const owner = this.props.owners.find(owner => owner.id === reservation.idOwner);

        return (
            <div className="details">
                <Carousel media={reservation.media} />
                <div className="details__container">
                    <div className="details__info">
                        <div className="details--borderbottom">
                            <h1>{reservation.name}</h1>
                            <p>Greater {this.state.city}, {this.state.country}</p>
                            <ul>
                                <li>{reservation.guests} guests</li>
                                <li>{reservation.bedrooms} bedrooms</li>
                                <li>{reservation.beds} beds</li>
                                <li>{reservation.bathrooms} bathrooms</li>
                            </ul>
                            <StarRatingComponent name="star" starCount={5} value={reservation.stars} starColor={'rgb(61, 162, 196)'} emptyStarColor={'rgb(168, 168, 168)'} />
                            <p>{reservation.description}</p>
                        </div>
                        <div className="details--borderbottom">
                            <Amenities extras={reservation.extras} />
                        </div>
                        <div className="details--borderbottom">
                            <Owner owner={owner} />
                        </div>
                    </div>
                    <div className="details__reservation">
                        <ForReservation reservation={reservation} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        cities: state.cities,
        homes: state.homes,
        owners: state.owners
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRandomPlaces: () => {
            dispatch({ type: 'LOGOUT' })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);
