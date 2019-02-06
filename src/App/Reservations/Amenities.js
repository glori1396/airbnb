import React, { Component } from 'react';
import { faWifi, faUtensils, faLaptop, faWind, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './reservation.scss';
const uuidv1 = require('uuid/v1');

class Amenities extends Component {

    constructor() {
        super()
        this.state = {
            isClicked: false
        }
    }

    handleClick = () => {
        this.setState({ isClicked: !this.state.isClicked })
    }

    handleMore = (extras) => {
        return extras.map(obj => <li>{obj}</li>)
    }

    render() {
        const iconsj = { faWifi, faUtensils, faLaptop, faWind, faPlusCircle }
        let icons = this.props.extras[0];
        let extras = this.props.extras[1];
        return (
            <div className="amenities">
                {icons.map(obj => <div><FontAwesomeIcon className="amenities__icon" icon={iconsj[obj.icon]} key={uuidv1()} /> {obj.value}</div>)}
                <button onClick={this.handleClick}>See more</button>
                {this.state.isClicked ? <ul>{this.handleMore(extras)}</ul> : null}
            </div>
        );
    }
}
export default (Amenities);
