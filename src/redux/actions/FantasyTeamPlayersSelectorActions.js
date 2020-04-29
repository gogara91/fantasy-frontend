import * as actionTypes from './actionTypes';

const setPlayerNameDispatcher = (name) => {
    return {
        type: actionTypes.SET_PLAYER_NAME_FILTER,
        payload: name
    }
}

export const setPlayerName = (name) => {
    return async (dispatch) => {
        dispatch(setPlayerNameDispatcher(name))
    }
}

const setSortByDispatcher = (name) => {
    return {
        type: actionTypes.SET_SORT_BY_FILTER,
        payload: name
    }
}

export const setSortBy = (name) => {
    return async (dispatch) => {
        dispatch(setSortByDispatcher(name))
    }
}

const setSelectedTeamsDispatcher = (name) => {
    return {
        type: actionTypes.SET_TEAMS_FILTER,
        payload: name
    }
}

export const setSelectedTeamsFilter = (name) => {
    return async (dispatch) => {
        dispatch(setSelectedTeamsDispatcher(name))
    }
}