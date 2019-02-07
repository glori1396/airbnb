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
        return extras.map(obj => <li className="list__item">{obj}</li>)
    }

    render() {
        const iconsj = { faWifi, faUtensils, faLaptop, faWind, faPlusCircle }
        let icons = this.props.extras[0];
        let extras = this.props.extras[1];
        return (
            <div className="amenities">
                <h3>Amenities</h3>
                <div className="amenities__icons">
                    {icons.map(obj => <div key={uuidv1()} className="amenities__icon"><FontAwesomeIcon className="fontawesome" icon={iconsj[obj.icon]} key={uuidv1()} /> <p>{obj.value}</p></div>)}
                </div>
                <button className="amenities__button" onClick={this.handleClick}>{this.state.isClicked ? "See less" : "See more"}</button>
                {this.state.isClicked ? <ul className="amenities__list">{this.handleMore(extras)}</ul> : null}
            </div>
        );
    }
}

export default (Amenities);
