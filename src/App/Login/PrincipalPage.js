import React, { Component } from 'react';
import './login.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ModalLoginSignup from '../Login/ModalLoginSignup'

class PrincipalPage extends Component {

    constructor() {
        super()
        this.state = {
            onLoginClick: true
        }
    }

    handleLogin = () => {
        this.setState({ onLoginClick: !this.state.onLoginClick })
    }


    handleReservation = () => {
        if (!this.props.currentUser) {
            return !this.state.onLoginClick ? <ModalLoginSignup onLogin={this.handleLogin} /> : null
        }
    }


    render() {
        if (this.props.currentUser) this.props.history.push('/h')
        return (
            <div className="wallpaper">
                <div className="wallpaper--shadow">
                    <div className="wallpaper__menu">
                        <h2 className="wallpaper__menu__title">Airbnb + Fitness</h2>
                        <p className="wallpaper__menu__p">Book unique homes and experiences.</p>
                        <Link to="/h" className="wallpaper__menu__button button">Continue as guest</Link>
                        <button className="wallpaper__menu__button button" onClick={this.handleLogin}>Log in</button>
                    </div>
                </div>
                {this.handleReservation()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        cities: state.cities,
        homes: state.homes,
        owners: state.owners,
        currentUser: state.currentUser,
        users: state.users
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PrincipalPage);
