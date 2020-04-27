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