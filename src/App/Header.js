import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './main.scss';

class Header extends Component {

    handleMenu = () => {
        if (!this.props.currentUser) {
            return (
                <ul className="navBar__menu">
                    <li><Link to='/' className="navBar__menu__item">Log in</Link></li>
                </ul>
            )
        } else {
            return (
                <ul className="navBar__menu">
                    <li className="navBar__menu__item" onClick={this.props.onLogout}>{this.props.currentUser.name} Log out</li>
                </ul >
            )
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
                        <h4 className="navBar__searchbar__logo">Logo</h4>
                        <form className="form__searchbar" onSubmit={this.handleSubmit}>
                            <label className="form__label">Q</label>
                            <input className="form__search" type="search" placeholder='Try "Paris"' />
                        </form>
                    </div>
                    {this.handleMenu()}
                </nav>
            </div>
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
        onLogout: () => {
            dispatch({ type: 'LOGOUT' })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
