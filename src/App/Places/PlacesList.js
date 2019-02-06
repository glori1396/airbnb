import React, { Component } from 'react';
import Explore from '../Explore/Explore'
import { connect } from 'react-redux';
import './places.scss';
import { randomPlaces } from './functions';
import Homes from './Homes'
const uuidv1 = require('uuid/v1');

class PlacesList extends Component {

    render() {
        const list = randomPlaces(this.props);
        return (
            <div className="">
                <Explore match={this.props.match} />
                {list.map(places => <Homes key={uuidv1()} places={places} cities={this.props.cities} countries={this.props.countries} match={this.props.match} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
