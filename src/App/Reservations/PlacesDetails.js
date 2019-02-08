import React, { Component } from 'react';
import './reservation.scss';
import Carousel from '../Places/Carousel';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import Amenities from './Amenities';
import Owner from './Owner';
import ForReservation from './ForReservation'
import MyReservation from './MyReservation'
import ModalLoginSignup from '../Login/ModalLoginSignup'

class PlaceDetails extends Component {

    constructor() {
        super()
        this.state = {
            city: "",
            country: "",
            reservation: {},
            onLoginClick: true
        }
    }

    handleLogin = () => {
        this.setState({ onLoginClick: !this.state.onLoginClick })
    }

    componentDidMount() {
        let reservation = this.props.homes.find(home => home.id === parseInt(this.props.match.params.idPlace));
        if (!reservation) reservation = this.props.gyms.find(gym => gym.id === parseInt(this.props.match.params.idPlace));
        const city = this.props.cities.find(city => city.id === reservation.idCity);
        const country = this.props.countries.find(country => country.id === reservation.idCountry);
        this.setState({ city: city.city, country: country.country })
    }

    handleReservation = () => {
        if (!this.props.currentUser) {
            return !this.state.onLoginClick ? <ModalLoginSignup onLogin={this.handleLogin} /> : null
        }
    }

    handleMyReservation = (reservation, isHome) => {
        if (this.props.currentUser) {
            const result = this.props.currentUser.reservations.find(obj => obj.id === reservation.id);
            if (result) return <MyReservation reservation={result} isHome={isHome} />
        }
        return <ForReservation reservation={reservation} onLogin={this.handleLogin} isHome={isHome} />

    }

    render() {
        let isHome = true;
        let reservation = this.props.homes.find(home => home.id === parseInt(this.props.match.params.idPlace));
        if (!reservation) {
            reservation = this.props.gyms.find(gym => gym.id === parseInt(this.props.match.params.idPlace));
            isHome = false;
        }
        const owner = this.props.owners.find(owner => owner.id === reservation.idOwner);
        return (
            <div className="details">
                <Carousel media={reservation.media} />
                <div className="details__container">
                    <div className="details__info">
                        <div className="details--borderbottom">
                            <h1>{reservation.name}</h1>
                            <p>Greater {this.state.city}, {this.state.country}</p>
                            {isHome ? <ul className="details__list">
                                <li className="details__list__element">{reservation.guests} guests</li>
                                <li className="details__list__element">{reservation.bedrooms} bedrooms</li>
                                <li className="details__list__element">{reservation.beds} beds</li>
                                <li>{reservation.bathrooms} bathrooms</li>
                            </ul> : null}
                            <StarRatingComponent className="details__rating" name="star" starCount={5} value={reservation.stars} starColor={'rgb(61, 162, 196)'} emptyStarColor={'rgb(168, 168, 168)'} />
                            <p>{reservation.description}</p>
                        </div>
                        <div className="details--borderbottom">
                            <Amenities extras={reservation.extras} isHome={isHome} />
                        </div>
                        <div className="details--borderbottom">
                            <Owner owner={owner} />
                        </div>
                    </div>
                    <div className="details__reservation">
                        {this.handleMyReservation(reservation, isHome)}
                    </div>
                </div>
                {this.handleReservation()}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        cities: state.cities,
        homes: state.homes,
        owners: state.owners,
        currentUser: state.currentUser,
        users: state.users,
        gyms: state.gyms
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);
