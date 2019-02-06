import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './main.scss';

class Header extends Component {

    handleMenu = () => {
        if (this.props.isLogin) {
            return (
                <ul className="navBar__menu">
                    <li><Link to='/signup' className="navBar__menu__item">Sign up</Link></li>
                    <li><Link to='/login' className="navBar__menu__item">Log in</Link></li>
                </ul>
            )
        } else {
            return (
                <ul className="navBar__menu">
                    <li><Link to='/' className="navBar__menu__item" onClick={this.handleLogout}>Logout</Link></li>
                </ul >
            )
        }
    }

    handleLogout = () => {
        this.props.onlogout();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("holiiii dio al enter")
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
        customer: state.customer
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
