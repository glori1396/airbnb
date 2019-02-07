import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = { error: '', username: '', password: '' };
    }

    handleChangeUsername = (event) => {
        this.setState({ username: event.target.value });
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.username === '' || this.state.password === '') {
            this.setState({ error: "Insert user and password" })
        } else {
            this.props.onLogin(this.state.username, this.state.password);
        }
    }

    render() {
        return (
            <div className="login">
                <h1>Log in</h1>
                <h4 className="login__error">{this.state.error}</h4>
                <form onSubmit={this.handleSubmit} className="login__form">
                    <input className="login__input" type="email" value={this.state.value} placeholder="Email Address" onChange={this.handleChangeUsername} />
                    <input className="login__input" type="password" value={this.state.value} placeholder="Password" onChange={this.handleChangePassword} />
                    <input className="login__button" type="submit" value="Log in" />
                </form>
                <h4>Don’t have an Airbnb account? <button className="login__change" onClick={this.props.onChange}>Sign up</button></h4>
                <Link to='/h' className="modal__visitor">Continue as visitor...</Link>
            </div >
        );
    }
}


const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => {
            dispatch({ type: 'LOGIN', username, password })
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
