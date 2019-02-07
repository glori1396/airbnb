import React, { Component } from 'react';
import { connect } from 'react-redux';
import './reservation.scss';

class ForReservation extends Component {

    constructor() {
        super()
        this.state = {
            checkin: "",
            checkout: "",
            guests: 1,
            error: ""
        }
    }

    handleChangeInitialDate = (event) => {
        this.setState({ checkin: event.target.value });
    }
    handleChangeFinalDate = (event) => {
        this.setState({ checkout: event.target.value });
    }

    handleMinus = (event) => {
        event.preventDefault()
        if (this.state.guests !== 1) {
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
        if (!this.props.currentUser) {
            this.props.onLogin();
        } else {
            if (this.state.checkin === "" || this.state.checkout === "") {
                this.setState({ error: "Choose your dates" })
            } else {
                this.props.onNewReservation(this.props.reservation.id, this.state.checkin, this.state.checkout, this.state.guests, "home")
            }
        }
    }

    render() {
        const reservation = this.props.reservation;
        return (
            <div className="reservation">
                <h4>$ {reservation.price} per night</h4>
                <form className="reservation__form" onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Dates</label>
                    <h4 className="login__error">{this.state.error}</h4>
                    <div className="form--inline">
                        <input className="form--margin form__date" type="date" min="2019-02-08" onChange={this.handleChangeInitialDate} />
                        <p className="form--margin" >→</p>
                        <input className="form__date" type="date" min={this.state.checkin} onChange={this.handleChangeFinalDate} />
                    </div>
                    <label>Guests</label>
                    <div className="form--inline">
                        <button className="form--margin form__guest" onClick={this.handleMinus}><p className="form__guest__minus">-</p></button>
                        <p className="form--margin">{this.state.guests}</p>
                        <button className="form__guest" onClick={this.handleMore}><p className="form__guest__p">+</p></button>
                    </div>
                    <div className="form--inline">
                        <input className="form__button button" type="submit" value="Book" />
                    </div>
                </form>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        users: state.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewReservation: (idReservation, checkin, checkout, guests, rtype) => {
            dispatch({ type: 'NEW_RESERVATION', idReservation, checkin, checkout, guests, rtype })
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ForReservation);
