import React, { Component } from 'react';
import './places.scss';
import Home from './Home';
const funct = require("underscore");
const uuidv1 = require('uuid/v1');


class Homes extends Component {

    render() {
        const idCity = this.props.places[0].idCity
        let title = <h2>Homes in {funct.where(this.props.cities, { id: idCity })[0].city}</h2>
        return (
            <div className="homes">
                {title}
                <p>Find your best option here!</p>
                <div className="homes__container">
                    {this.props.places.map(obj => <Home key={uuidv1()} home={obj} cities={this.props.cities} countries={this.props.countries} match={this.props.match} />)}
                </div>
            </div>
        );
    }
}


export default (Homes);
