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
        case actionTypes.SET_FANTASY_TEAM_PLAYERS:
            return {
                ...state,
                team: {...state.team, players: [...action.payload]}
            }
        case actionTypes.ADD_PLAYER_TO_FANTASY_TEAM:
            return {
                ...state,
                team: {
                    ...state.team,
                    used_budget: action.payload.used_budget,
                    players: [...state.team.players, action.payload.player]
                }
            }
        case actionTypes.REPLACE_FANTASY_TEAM_PLAYERS:
            console.log(action.payload);
            return {
                ...state,
                team: {
                    ...state.team,
                    players: [...action.payload]
                }
            }
        case actionTypes.REMOVE_FANTASY_PLAYER:
            return {
                ...state,
                team: {
                    ...state.team,
                    used_budget: action.payload.used_budget,
                    players: [...action.payload.players]
                }
            }
        default: return state;
    }
}
