import * as Redux from 'redux';

import data from '../App/data.json';

export function reducer(state = { countries: data.countries, owners: data.owners, cities: data.cities, homes: data.homes, gyms: data.gyms }, action) {
    switch (action.type) {
        case 'LOGIN':
            sessionStorage.setItem("customer", action.customer)
            return Object.assign(
                {},
                state, {
                    customer: action.customer
                });
        case 'LOGOUT':
            return Object.assign(
                {},
                state, {
                    customer: ''
                });
        default:
            return state;
    }
}

export let store = Redux.createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
