import TeamsService from "../../services/TeamsService";
import * as actionTypes from './actionTypes';
import {showErrorModal} from "./errorActions";

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
            return dispatch(showErrorModal({
                title: 'No teams found',
                text: 'No teams found',
                type: actionTypes.ERROR_DANGER
            }))
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
            return dispatch(showErrorModal({
                title: 'Team Not Found',
                text: 'Team Not Found',
                type: actionTypes.ERROR_DANGER
            }))
        }
    }
};

export const updateTeam = (id, payload) => {
    return {
        type: actionTypes.UPDATE_TEAM,
        payload
    }
};

export const saveTeam = (id, payload) => {
    return async (dispatch) => {
        try {
            await TeamsService.update(id, payload);

            return dispatch(showErrorModal({
                title: 'Success',
                text: 'Team is successfully saved!',
                type: actionTypes.ERROR_SUCCESS
            }))

        } catch(e) {
            return dispatch(showErrorModal({
                title: 'Not saved',
                text: 'Couldnt save team!',
                type: actionTypes.ERROR_DANGER
            }))
        }
    }
};

const fetchTeamGamesDispatcher = (data) => {
    return {
        type: actionTypes.FETCH_TEAM_GAMES,
        payload: data
    }
};

export const fetchTeamGames = (teamId) => {
    return async(dispatch) => {
        try {
            const { data } = await TeamsService.teamGames(teamId);
            return dispatch(fetchTeamGamesDispatcher(data));
        } catch(e) {
            return dispatch(showErrorModal({
                title: 'Error!',
                text: 'Something went wrong!',
                type: actionTypes.ERROR_DANGER
            }))
        }
    }
};

const fetchTeamScoresDispatcher = (data) => {
    return {
        type: actionTypes.FETCH_TEAM_GAMES,
        payload: data
    }
};

export const fetchTeamScores = (teamId) => {
    return async(dispatch) => {
        try {
            const { data } = await TeamsService.teamScores(teamId);
            return dispatch(fetchTeamScoresDispatcher(data));
        } catch(e) {
            return dispatch(showErrorModal({
                title: 'Ooops!',
                text: 'Something went wrong!',
                type: actionTypes.ERROR_DANGER
            }))
        }
    }
};

