import React, { Component } from 'react';
import { connect } from 'react-redux';
import './reservation.scss';
import ModalBookGym from './ModalBookGym'

class MyReservation extends Component {

    constructor() {
        super()
        this.state = {
            checkin: "",
            checkout: "",
            guests: 1,
            error: "",
            onLoginClick: false
        }
    }

    handleLogin = () => {
        this.setState({ onLoginClick: !this.state.onLoginClick })
    }

    componentDidMount() {
        this.setState({
            checkin: this.props.reservation.checkin,
            checkout: this.props.reservation.checkout,
            guests: this.props.reservation.guests,
            onLoginClick: this.props.isHome ? true : false
        })
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
        if (!this.props.currentUser) this.props.onLogin();
        if (this.state.checkin === "" || this.state.checkout === "") {
            this.setState({ error: "Choose your dates" })
        } else {
            this.props.onUpdate(this.props.reservation.id, this.state.checkin, this.state.checkout, this.state.guests)
        }
    }

    render() {
        return (
            <div className="reservation">
                <h4>{this.props.currentUser.firstName}'s reservation</h4>
                <form className="reservation__form" onSubmit={(event) => this.handleSubmit(event)}>
                    <label>{this.props.isHome ? "Dates" : "Your dates"}</label>
                    <h4 className="login__error">{this.state.error}</h4>
                    <div className="form--inline">
                        <input className="form--margin form__date" type="date" value={this.state.checkin} min="2019-02-08" onChange={this.handleChangeInitialDate} />
                        <p className="form--margin" >→</p>
                        <input className="form__date" type="date" value={this.state.checkout} min={this.state.checkin} onChange={this.handleChangeFinalDate} />
                    </div>
                    <label>{this.props.isHome ? "Guests" : "How many people?"}</label>
                    <div className="form--inline">
                        <button className="form--margin form__guest" onClick={this.handleMinus}><p className="form__guest__minus">-</p></button>
                        <p className="form--margin">{this.state.guests}</p>
                        <button className="form__guest" onClick={this.handleMore}><p className="form__guest__p">+</p></button>
                    </div>
                    <div className="form--inline">
                        <input className="form__button button" type="submit" value="Change" />
                        <button className="form__button button" onClick={() => this.props.onDelete(this.props.reservation.id)}>Delete</button>
                    </div>
                </form>
                {this.state.onLoginClick ? <ModalBookGym reservation={this.props.reservation} onLogin={this.handleLogin} /> : null}
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (idReservation) => {
            dispatch({ type: 'DELETE_RESERVATION', idReservation })
        },
        onUpdate: (idReservation, checkin, checkout, guests) => {
            dispatch({ type: 'UPDATE_RESERVATION', idReservation, checkin, checkout, guests })
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(MyReservation);
