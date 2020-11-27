import * as actionTypes from '../actions/actionTypes'

const initialState = {
    showSideNavigation: false,
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