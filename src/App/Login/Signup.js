import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Signup extends Component {

    constructor() {
        super();
        this.state = { error: '', username: '', fistname: '', lastname: '', password: '' };
    }


    handleChangeUsername = (event) => {
        this.setState({ username: event.target.value });
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    handleChangeName = (event) => {
        this.setState({ fistname: event.target.value });
    }
    handleChangeLastName = (event) => {
        this.setState({ lastname: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.username === '' || this.state.password === '' || this.state.fistname === '' || this.state.lastname === '') {
            this.setState({ error: "Complete all the information" })
        } else {
            this.props.onSignup(this.state.username, this.state.password, this.state.fistname, this.state.lastname);
            this.setState({ error: "The email already exists" })
        }
    }


    render() {
        return (
            <div className="login">
                <h1>Sign up</h1>
                <h4 className="login__error">{this.state.error}</h4>
                <form onSubmit={this.handleSubmit} className="login__form">
                    <input className="login__input" type="email" value={this.state.value} placeholder="Email Address" onChange={this.handleChangeUsername} />
                    <input className="login__input" type="text" value={this.state.value} placeholder="First Name" onChange={this.handleChangeName} />
                    <input className="login__input" type="text" value={this.state.value} placeholder="Last Name" onChange={this.handleChangeLastName} />
                    <input className="login__input" type="password" value={this.state.value} placeholder="Create Password" onChange={this.handleChangePassword} />
                    <input className="login__button" type="submit" value="Sign up" />
                </form>
                <h4>Already have an Airbnb account? <button className="login__change button" onClick={this.props.onChange}>Log in</button></h4>
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
        onSignup: (username, password, firstname, lastname) => {
            dispatch({ type: 'SIGNUP', username, password, firstname, lastname })
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Signup);
