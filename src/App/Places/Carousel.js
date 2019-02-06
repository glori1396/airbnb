import React, { Component } from 'react';
import './places.scss';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Carousel extends Component {

    constructor() {
        super()
        this.state = {
            index: 0
        }
    }

    handlePrevious = () => {
        if (this.state.index === 0) {
            this.setState({ index: this.props.media.length - 1 })
        } else {
            this.setState({ index: this.state.index - 1 })
        }
    }

    handleNext = () => {
        if (this.state.index === (this.props.media.length - 1)) {
            this.setState({ index: 0 })
        } else {
            this.setState({ index: this.state.index + 1 })
        }
    }


    render() {
        return (
            <div className="carousel">
                <div className="carousel__image" style={{ backgroundImage: `url(${this.props.media[this.state.index]})` }} >
                    <FontAwesomeIcon className="carousel__button" onClick={() => this.handlePrevious()} icon={faChevronLeft} />
                    <FontAwesomeIcon className="carousel__button" onClick={() => this.handleNext()} icon={faChevronRight} />
                </div>

            </div >
        );
    }
}


export default (Carousel);
