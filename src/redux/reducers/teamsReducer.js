import * as teamActions from "../actions/teamsActions";
import * as actionTypes from '../actions/actionTypes'
const initialState = {
    teams: [],
    team: {}
};

export const TeamsStore = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_TEAMS:
            return {
                ...state,
                teams: [...action.payload]
            };
        case actionTypes.FETCH_TEAM:
            return {
                ...state,
                team: {...action.payload}
            }

        default: return state;
    }
};
