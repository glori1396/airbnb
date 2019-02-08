import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalLoginSignup from './Login/ModalLoginSignup'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './main.scss';
import logo from '../media/logo.png';

class Header extends Component {

    constructor() {
        super();
        this.state = { onLoginClick: true }
    }

    handleLogin = () => { this.setState({ onLoginClick: !this.state.onLoginClick }) }

    handleReservation = () => { if (!this.props.currentUser) { return !this.state.onLoginClick ? <ModalLoginSignup onLogin={this.handleLogin} /> : null } }

    handleMenu = () => {
        if (!this.props.currentUser) {
            return (<ul className="navBar__menu"><li className="navBar__menu__item button" onClick={this.handleLogin}>Log in</li></ul>)
        } else {
            return (<ul className="navBar__menu"><li className="navBar__menu__item button" onClick={this.props.onLogout}>{this.props.currentUser.name} Log out</li></ul>)
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Search result")
    }

    render() {
        return (
            <div className="header">
                <nav className="navBar">
                    <div className="navBar__searchbar">
                        <Link to='/h'><img src={logo} className="navBar__searchbar__logo" alt="logo" /></Link>
                        <form className="form__searchbar" onSubmit={this.handleSubmit}>
                            <FontAwesomeIcon className="form__label" icon={faSearch} />
                            <input className="form__search" type="search" placeholder='Try "Paris"' />
                        </form>
                    </div>
                    {this.handleMenu()}
                </nav>
                {this.handleReservation()}
            </div>
        );
    }
}




const mapStateToProps = (state) => {
    return { currentUser: state.currentUser };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch({ type: 'LOGOUT' })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
