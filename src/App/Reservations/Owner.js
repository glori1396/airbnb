import React, { Component } from 'react';
import './reservation.scss';

class Owner extends Component {


    render() {
        const owner = this.props.owner
        return (
            <div className="owner">
                <h3 className="owner__item">Hosted by {owner.name}</h3>
                <p className="owner__item">{owner.direction} - {owner.joined}</p>
                <p className="owner__item">{owner.description}</p>
                <p className="owner__item">Languages: <strong>{owner.languages}</strong></p>
                <p className="owner__item">Response rate: <strong>{owner.response}</strong></p>
                <p className="owner__item">Response time: <strong>{owner.time}</strong></p>
            </div>
        );
    }
}
export default (Owner);
