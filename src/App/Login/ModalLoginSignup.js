import React, { Component } from 'react';
import { connect } from 'react-redux';
import './login.scss'
import Login from './Login'
import Signup from './Signup'

class ModalLoginSignup extends Component {

    constructor() {
        super();
        this.state = { isLogin: true };
    }

    handleChange = () => {
        this.setState({ isLogin: !this.state.isLogin })
    }
    render() {
        return (
            <div className="modal">
                <div className="modal__container">
                    <span className="modal__close" onClick={this.props.onLogin}>&times;</span>
                    {this.state.isLogin ? <Login onChange={this.handleChange} /> : <Signup onChange={this.handleChange} />}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalLoginSignup);
