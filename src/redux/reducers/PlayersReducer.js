import * as actionTypes from '../actions/actionTypes'

const initialState = {
    playersWithTeam: [],
};

export const PlayersStore = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_PLAYERS_WITH_TEAM:
            return {
                ...state,
                playersWithTeam: action.payload
            };
        default:
            return state;
    }
};