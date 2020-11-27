import * as actionTypes from '../actions/actionTypes'

const data = require('../../json/movies-in-theaters.json');

const initialState = {
    showSideNavigation: false,
    movies: data
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.TOGGLE_SIDE_BAR:
            return {
                ...state,
                showSideNavigation: !state.showSideNavigation
            };

        default:
            return {
                ...state
            };
    }
}

export default reducer;