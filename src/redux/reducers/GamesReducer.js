import * as actionTypes from '../actions/actionTypes'

const initialState = {
    games: [],
};

export const GamesStore = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_GAMES:
            return {
                ...state,
                games: [...action.payload]
            };
        default:
            return state;
    }
};