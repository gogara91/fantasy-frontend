import * as actionTypes from '../actions/actionTypes'

const initialState = {
    games: [],
    game:{},
    liveGame: {}
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
        case actionTypes.START_GAME:
            return {
                ...state,
            };
        case actionTypes.FETCH_LIVE_GAME:
            return {
                ...state,
                liveGame: {...action.payload}
            };
        default:
            return state;
    }
};