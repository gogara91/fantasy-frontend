import * as actionTypes from '../actions/actionTypes'

const initialState = {
    user_teams: [],
    team: {}
};

export const FantasyTeamsStore = (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_FANTASY_TEAMS_FOR_USER:
            return {
                ...state,
                user_teams: action.payload.fantasy_teams
            };
        case actionTypes.FETCH_FANTASY_TEAM:
            return {
                ...state,
                team: action.payload
            }
        default: return state;
    }
}
