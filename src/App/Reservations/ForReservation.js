import React, { Component } from 'react';
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './reservation.scss';

class ForReservation extends Component {

    constructor() {
        super()
        this.state = {
            checkin: "",
            checkout: "",
            guests: 0
        }
    }

    handleMinus = (event) => {
        event.preventDefault()
        if (this.state.guests !== 0) {
            this.setState({ guests: this.state.guests - 1 })
        }
    }

    handleMore = (event) => {
        event.preventDefault()
        if (this.state.guests < 12) {
            this.setState({ guests: this.state.guests + 1 })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onLogin();
    }

    render() {
        const reservation = this.props.reservation;
        return (
            <div className="reservation">
                <h4>$ {reservation.price} per night</h4>
                <form className="reservation__form" onSubmit={() => this.props.handleSubmit()}>
                    <label>Dates</label>
                    <div className="form--inline">
                        <input className="form--margin form__date" type="date" />
                        <p className="form--margin" >→</p>
                        <input className="form__date" type="date" />
                    </div>
                    <label>Guests</label>
                    <div className="form--inline">
                        <button className="form--margin form__guest" onClick={this.handleMinus}><p className="form__guest__minus">-</p></button>
                        <p className="form--margin">{this.state.guests}</p>
                        <button className="form__guest" onClick={this.handleMore}><p className="form__guest__p">+</p></button>
                    </div>
                    <div className="form--inline">
                        <input className="form__button" type="submit" value="Book" />
                    </div>
                </form>
            </div >
        );
    }
}
export default (ForReservation);
