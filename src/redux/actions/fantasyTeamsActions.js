import * as actionTypes from './actionTypes';
import FantasyTeamsService from "../../services/FantasyTeamsService";
const handleFetchFantasyTeamsForUserDispatcher = (data) => {
    return {
        type: actionTypes.FETCH_FANTASY_TEAMS_FOR_USER,
        payload: data
    }
};

export const FetchFantasyTeamsForUser = (userId) => {
    return async (dispatch) => {
        const {data} = await FantasyTeamsService.getUserTeams(userId)
        dispatch(handleFetchFantasyTeamsForUserDispatcher(data));
    }
};

const handleFetchFantasyTeamDispatcher = (data) => {
    return {
        type: actionTypes.FETCH_FANTASY_TEAM,
        payload: data
    }
};

export const handleFetchFantasyTeam = (teamId) => {
    return async (dispatch) => {
        const {data} = await FantasyTeamsService.getTeam(teamId)
        dispatch(handleFetchFantasyTeamDispatcher(data));
    }
};

const handleAddPlayerToFantasyTeamDispatcher = (data) => {
    return {
        type: actionTypes.ADD_PLAYER_TO_FANTASY_TEAM,
        payload: data
    }
}

export const handleAddPlayerToFantasyTeam = (playerId, teamId) => {
    return async (dispatch) => {
        try {
            const {data} = await FantasyTeamsService.addPlayer(playerId, teamId);
            dispatch(handleAddPlayerToFantasyTeamDispatcher(data));
        }
        catch(e) {
            if(e.response.data.error) {
                alert(e.response.data.error)
            }
        }
    }
}

const handleRemovePlayerFromFantasyTeamDispatcher = (data) => {
    return {
        type: actionTypes.REMOVE_FANTASY_PLAYER,
        payload: data
    }
}

export const handleRemovePlayerFromFantasyTeam = (players, playerId) => {
    return async (dispatch) => {
        try {
            // Get id thats in #fantasy_team_players# as primary key
            const player = players.filter(player => player.player_id === playerId)[0]
            const {data} = await FantasyTeamsService.removePlayer(player.id);
            const filteredPlayers = players.filter(player => player.player_id !== playerId);
            dispatch(handleRemovePlayerFromFantasyTeamDispatcher({
                players: filteredPlayers,
                used_budget: data.used_budget
            }));
        } catch (e) {
            console.log(e);
        }
    }
}

const handleReplacePlayersDispatcher = (players) => {

    return {
        type: actionTypes.REPLACE_FANTASY_TEAM_PLAYERS,
        payload: players
    }
}

//Actually player ID-s.
export const handleReplacePlayers = (players, teamId)  => {
    return async (dispatch) => {
        try {
            const {data} = await FantasyTeamsService.replacePlayers(players, teamId)
            dispatch(handleReplacePlayersDispatcher(data))
        } catch(e) {
            alert(e.response.data.error);
        }
    }
}