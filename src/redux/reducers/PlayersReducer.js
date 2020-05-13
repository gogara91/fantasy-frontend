import * as actionTypes from '../actions/actionTypes';
import PlayersService from "../../services/PlayersService";

const initialState = {
    playersWithTeam: [],
    filteredPayersWithTeam: [],
    playerNameFilter: '',
    sortByFilter: '',
    teamsFilter: []
};

export const PlayersStore = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_PLAYERS_WITH_TEAM:
            return {
                ...state,
                playersWithTeam: action.payload,
                filteredPayersWithTeam: action.payload
            };
        case actionTypes.FILTER_PLAYERS_BY_NAME:
            return {
                ...state,
                playerNameFilter: action.payload,
                filteredPayersWithTeam: PlayersService.filterPlayers(
                    state.playersWithTeam,
                    action.payload,
                    state.teamsFilter,
                    state.sortByFilter
                )
            };
        case actionTypes.SET_SORT_BY_FILTER:
            return {
                ...state,
                sortByFilter: action.payload
            };
        case actionTypes.SET_TEAMS_FILTER:
            return {
                ...state,
                teamsFilter: action.payload,
                filteredPayersWithTeam: PlayersService.filterPlayers(
                    state.playersWithTeam,
                    state.playerNameFilter,
                    action.payload,
                    state.sortByFilter
                )
            };
        case actionTypes.RESET_PLAYER_FILTERS:
            return {
                ...state,
                playerNameFilter: '',
                sortByFilter: '',
                teamsFilter: []
            };
        default: return state;
    }
};