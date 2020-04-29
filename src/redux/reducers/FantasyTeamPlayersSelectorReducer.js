import * as actionTypes from '../actions/actionTypes'

const initialState = {
    playerNameFilter: '',
    sortByFilter: '',
    teamsFilter: []
};

export const FantasyTeamPlayersSelectorStore = (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_PLAYER_NAME_FILTER:
            return {
                ...state,
                playerNameFilter: action.payload
            };
        case actionTypes.SET_SORT_BY_FILTER:
            return {
                ...state,
                sortByFilter: action.payload
            };
        case actionTypes.SET_TEAMS_FILTER:
            return {
                ...state,
                teamsFilter: action.payload
            };
        default: return state;
    }
}
