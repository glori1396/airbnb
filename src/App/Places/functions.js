const funct = require("underscore");

export const getListPlaces = (homes, gyms, type) => {
    let places = [];
    if (typeof (type) === 'undefined' || type === "Homes") {
        for (let i = 0; i < 5; i++) {
            places.push([funct.where(homes, { idCity: i + 1 }), "Homes"]);
        }
    }
    if (typeof (type) === 'undefined' || type === "Gyms") {
        for (let i = 0; i < 5; i++) {
            places.push([funct.where(gyms, { idCity: i + 1 }), "Gyms"]);
        }
    }
    return places;
}

export const userReservations = (userReservations, places) => {
    let userPlaces = userReservations.map(place => places.find(obj => obj.id === parseInt(place.id)));
    if (userPlaces.length === 0) return false;
    return userPlaces;
}
