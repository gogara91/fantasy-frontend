import * as actionTypes from '../actions/actionTypes'
const initialState = {
    teams: [],
    team: {},
    teamGames: [],
    teamGamesWithScores: []
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
            };
        case actionTypes.FETCH_TEAM_GAMES:
            return {
                ...state,
                teamGames: [...action.payload]
            }
        case actionTypes.UPDATE_TEAM:
            return {
                ...state,
                team: {
                    ...state.team,
                    ...action.payload
                }
            };

        case actionTypes.FETCH_TEAM_SCORES:
            return {
                ...state,
                teamGames: [...action.payload]
            }
        default: return state;
    }
};
