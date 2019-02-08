import * as Redux from 'redux';
import data from '../App/data.json';
const uuidv1 = require('uuid/v1');

export function reducer(state = { countries: data.countries, owners: data.owners, cities: data.cities, homes: data.homes, gyms: data.gyms, currentUser: false, users: data.users }, action) {
    switch (action.type) {
        case 'LOGIN':
            //sessionStorage.setItem("customer", action.customer)
            let user = state.users.find(user => user.username === action.username);
            if (user && user.password !== action.password) user = false;
            return Object.assign(
                {},
                state, {
                    currentUser: user ? user : false
                });
        case 'LOGOUT':
            return Object.assign(
                {},
                state, {
                    currentUser: false
                });
        case 'SIGNUP':
            //sessionStorage.setItem("customer", action.customer)
            user = false;
            if (!state.users.find(user => user.username === action.username)) {
                user = {
                    "id": uuidv1(),
                    "username": action.username,
                    "password": action.password,
                    "firstName": action.firstName,
                    "lastName": action.lastName,
                    "reservations": []
                }
            }
            return Object.assign(
                {},
                state, {
                    users: user ? state.users.concat(user) : [...state.users],
                    currentUser: user
                });
        case 'NEW_RESERVATION':
            let newUsers = [...state.users]
            let result = newUsers.find(user => user.id === state.currentUser.id)
            const reservation = {
                "id": action.idReservation,
                "checkin": action.checkin,
                "checkout": action.checkout,
                "guests": action.guests,
                "type": action.rtype
            }
            result.reservations.push(reservation);
            return Object.assign(
                {},
                state, {
                    users: newUsers,
                    currentUser: result
                });
        case 'UPDATE_RESERVATION':
            newUsers = [...state.users]
            result = newUsers.find(user => user.id === state.currentUser.id)
            let result_reservation = result.reservations.find(obj => obj.id === action.idReservation);
            result_reservation.checkin = action.checkin;
            result_reservation.checkout = action.checkout;
            result_reservation.guests = action.guests;
            return Object.assign(
                {},
                state, {
                    users: newUsers,
                    currentUser: result
                });
        case 'DELETE_RESERVATION':
            newUsers = [...state.users]
            result = newUsers.find(user => user.id === state.currentUser.id)
            let index = result.reservations.findIndex(obj => obj.id === action.idReservation);
            result.reservations.splice(index, 1);
            return Object.assign(
                {},
                state, {
                    users: newUsers,
                    currentUser: result
                });
        default:
            return state;
    }
}

export let store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
