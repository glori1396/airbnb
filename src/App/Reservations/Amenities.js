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
        let extras = this.props.extras;
        let icons;
        if (this.props.isHome) {
            icons = this.props.extras[0];
            extras = this.props.extras[1];
        }
        return (
            <div className="amenities">
                <h3>{this.props.isHome ? "Amenities" : "What the gym offers"}</h3>
                {this.props.isHome ? <div className="amenities__icons">
                    {icons.map(obj => <div key={uuidv1()} className="amenities__icon"><FontAwesomeIcon className="fontawesome" icon={iconsj[obj.icon]} key={uuidv1()} /> <p>{obj.value}</p></div>)}
                </div> : <div className="amenities__icons">{extras.map(obj => <div key={uuidv1()} className="amenities__icon"><p>{obj}</p></div>)}</div>}
                {this.props.isHome ? <button className="amenities__button" onClick={this.handleClick}>{this.state.isClicked ? "See less" : "See more"}</button> : null}
                {this.props.isHome ? this.state.isClicked ? <ul className="amenities__list">{this.handleMore(extras)}</ul> : null : null}
            </div>
        );
    }
}

export default (Amenities);
