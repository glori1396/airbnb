import React, { Component } from 'react';
import './reservation.scss';

class Owner extends Component {


    render() {
        const owner = this.props.owner
        return (
            <div className="owner">
                <h3>Hosted by {owner.name}</h3>
                <p>{owner.direction} - {owner.joined}</p>
                <p>{owner.description}</p>
                <p>Languages: {owner.languages}</p>
                <p>Response rate: {owner.response}</p>
                <p>Response time: {owner.time}</p>
            </div>
        );
    }
}
export default (Owner);
