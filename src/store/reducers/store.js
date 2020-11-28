const data = require('../../json/movies-in-theaters.json');

const initialState = {
    movies: data
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return {
                ...state
            };
    }
}

export default reducer;