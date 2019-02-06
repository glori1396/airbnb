import React, { Component } from 'react';
import './reservation.scss';
import { connect } from 'react-redux';
const funct = require("underscore");


class PlaceDetails extends Component {

    constructor() {
        super()
        this.state = {
            city: "",
            country: "",
            reservation: {}
        }
    }

    componentDidMount = () => {
        const reservation = funct.where(this.props.homes, { id: this.props.match.params.idPlace })
        const city = funct.where(this.props.cities, { id: reservation.idCity })
        const country = funct.where(this.props.countries, { id: reservation.idCountry })
        this.setState({ reservation: reservation, country: country.name, city: city.name })
    }

    render() {
        return (
            <div className="homes">
                <p>Reservation</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        cities: state.cities,
        homes: state.homes
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
