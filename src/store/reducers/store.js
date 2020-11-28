import * as actionTypes from '../actions/actionTypes'

const data = require('../../json/movies-in-theaters.json');

const initialState = {
    movies: data,
    searchMovies: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.SEARCH_MOVIE:
            const findMovie = state.movies.find(movie => movie.title.toLowerCase() === action.payload.toLowerCase());

            if (findMovie) {
                return {
                    ...state,
                    searchMovies: [findMovie]
                }
            } else {
                return {
                    ...state,
                    searchMovies: []
                }
            }

        default:
            return {
                ...state
            };
    }
}

export default reducer;