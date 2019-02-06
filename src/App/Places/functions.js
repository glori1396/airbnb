const funct = require("underscore");

const getRandomInt = (max) => {
    return (Math.floor(Math.random() * Math.floor(max - 1))) + 1;
}

export const randomPlaces = (props) => {
    let places = [];
    if (props.isHomes) {
        //const randomHomes = getRandomInt(5);
        //console.log("--- Random de homes: " + randomHomes);
        for (let i = 0; i < 5; i++) {
            //const randomHome = getRandomInt(5);
            //console.log(i + "-------- El id escogido: " + randomHome)
            places.push(funct.where(props.homes, { idCity: i + 1 }));
        }
        //console.log("++++ places: " + JSON.stringify(places))
    }
    if (props.isGym) {
        /*const randomGyms = this.getRandomInt(5);
        for (const i = 0; i <= randomGyms; i++) {
            places.push(funct.where(props.gyms, { id: this.this.getRandomInt(5) }));
        }*/
    }
    return places;
}

export const example = () => {
    console.log("estoy probando")
    console.log("hooooolla: " + JSON.stringify(this.mapStateToProps.countries))
}
