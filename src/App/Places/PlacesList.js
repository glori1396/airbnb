import React, { Component } from 'react';
import Explore from '../Explore/Explore'
import { connect } from 'react-redux';
import './places.scss';
import { getListPlaces, userReservations } from './functions';
import Homes from './Homes'
const uuidv1 = require('uuid/v1');
const queryString = require('query-string');

class PlacesList extends Component {

    render() {
        const parsed = queryString.parse(this.props.location.search);
        const list = getListPlaces(this.props.homes, this.props.gyms, parsed.type);
        const userPlaces = this.props.currentUser ? userReservations(this.props.currentUser.reservations, this.props.homes) : false;
        return (
            <div>
                {userPlaces ? <div className="myReservation"><Homes key={uuidv1()} places={userPlaces} title={"My Reservations"} cities={this.props.cities} countries={this.props.countries} match={this.props.match} /> </div> : null}
                < Explore match={this.props.match} />
                {list.map(places => <Homes key={uuidv1()} places={places} cities={this.props.cities} isAll={typeof (parsed.type) === 'undefined'} countries={this.props.countries} match={this.props.match} />)}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        cities: state.cities,
        homes: state.homes,
        gyms: state.gyms,
        currentUser: state.currentUser
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
