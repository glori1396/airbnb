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

export const userReservations = (userReservations, homes, gyms) => {
    let places = [];
    let userHomes = userReservations.map(place => homes.find(obj => obj.id === parseInt(place.id)));
    userHomes.map(gym => (typeof (gym) !== "undefined") ? places.push(gym) : null);
    let userGyms = userReservations.map(place => gyms.find(obj => obj.id === parseInt(place.id)));
    if (userGyms.length > 0) userGyms.map(gym => (typeof (gym) !== "undefined") ? places.push(gym) : null);
    if (userHomes.length === 0) return false;
    return [places, "MyPlaces"];
}
