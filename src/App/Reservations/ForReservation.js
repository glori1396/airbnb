import React, { Component } from 'react';
import { faWifi, faUtensils, faLaptop, faWind, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './reservation.scss';
const uuidv1 = require('uuid/v1');

class ForReservation extends Component {

    constructor() {
        super()
        this.state = {
            checkin: "",
            checkout: ""
        }
    }


    render() {
        const reservation = this.props.reservation;
        return (
            <div className="reservation">
                <h4>$ {reservation.price} per night</h4>
                <form>
                    <label>Dates</label>
                    <div>
                        <input type="date" />
                        <p>→</p>
                        <input type="date" />
                    </div>
                    <label>Guests</label>
                    <input type="number" />
                </form>
            </div>
        );
    }
}
export default (ForReservation);
