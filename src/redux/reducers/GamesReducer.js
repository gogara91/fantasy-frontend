import * as actionTypes from '../actions/actionTypes'

const initialState = {
    games: [],
    game:{},
};

export const GamesStore = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_GAMES:
            return {
                ...state,
                games: [...action.payload],
            };
        case actionTypes.FETCH_GAME:
            return {
                ...state,
                game: {...action.payload},
            };
        default:
            return state;
    }
};