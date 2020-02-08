import TeamsService from "../../services/TeamsService";
import * as actionTypes from './actionTypes';

const fetchTeamsDispatcher = (data) => {
    return {
            type: actionTypes.FETCH_TEAMS,
            payload: data
    }

};

export const fetchTeams = () => {
    return async (dispatch) => {
        try {
            const { data } = await TeamsService.allTeams();
            return dispatch(fetchTeamsDispatcher(data));
        } catch(e) {
            console.log(e);
        }

    }
};

const fetchTeamDispatcher = (data) => {
    return {
        type: actionTypes.FETCH_TEAM,
        payload: data
    }
};

export const fetchTeam = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await TeamsService.team(id);
            return dispatch(fetchTeamDispatcher(data))
        } catch(e) {
            console.log(e);
        }
    }
}

const updateTeamDispatcher = (data) => {
    return {
        type: actionTypes.FETCH_TEAM,
        payload: data
    }
};

export const updateTeam = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await TeamsService.team(id);
            return dispatch(fetchTeamDispatcher(data))
        } catch(e) {
            console.log(e);
        }
    }
}

const fetchTeamGamesDispatcher = (data) => {
    return {
        type: actionTypes.FETCH_TEAM_GAMES,
        payload: data
    }
}
export const fetchTeamGames = (teamId) => {
    return async(dispatch) => {
        try {
            const { data } = await TeamsService.teamGames(teamId);
            return dispatch(fetchTeamGamesDispatcher(data));
        } catch(e) {
            console.log(e);
        }
    }
}