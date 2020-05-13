import * as actionTypes from '../actions/actionTypes'

const initialState = {
    playersWithTeam: [],
    FilteredPayersWithTeam: []
};

export const PlayersStore = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_PLAYERS_WITH_TEAM:
            return {
                ...state,
                playersWithTeam: action.payload,
                FilteredPayersWithTeam: action.payload
            };
        default:
            return state;
    }
};