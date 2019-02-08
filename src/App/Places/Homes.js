import React, { Component } from 'react';
import './places.scss';
import Home from './Home';
const funct = require("underscore");
const uuidv1 = require('uuid/v1');


class Homes extends Component {

    render() {
        let title;
        let description;
        if (this.props.title != null) {
            title = <h2>{this.props.title}</h2>
            description = <p>Click one reservation to see the details</p>
        } else {
            const idCity = this.props.places[0][0].idCity
            title = <h2>{this.props.places[1]} in {funct.where(this.props.cities, { id: idCity })[0].city}</h2>
            description = <p>Find your best option here!</p>
        }
        return (
            <div className="homes">
                {title}
                {description}
                <div className="homes__container">
                    {this.props.places[0].map(obj => <Home key={uuidv1()} home={obj} cities={this.props.cities} countries={this.props.countries} match={this.props.match} />)}
                </div>
            </div>
        );
    }
}


export default (Homes);
