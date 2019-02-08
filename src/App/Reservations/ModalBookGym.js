import React, { Component } from 'react';
import { connect } from 'react-redux';
import './reservation.scss';
import GymDetails from './GymDetails'
const uuidv1 = require('uuid/v1');
const funct = require("underscore");

class ModalLoginSignup extends Component {

    handleChange = () => {
        this.setState({ isLogin: !this.state.isLogin })
    }
    render() {
        const homes = this.props.homes.find(home => home.id === this.props.reservation.id)
        const places = funct.where(this.props.gyms, { idCity: homes.idCity });
        return (
            <div className="modal">
                <div className="modal__container">
                    <span className="modal__close" onClick={this.props.onLogin}>&times;</span>
                    {places.map(gym => <GymDetails gym={gym} key={uuidv1()} />)}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        gyms: state.gyms,
        homes: state.homes
    };
}

const mapDispatchToProps = (dispatch) => {
    return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(ModalLoginSignup);
