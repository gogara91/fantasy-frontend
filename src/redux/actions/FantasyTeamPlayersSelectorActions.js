import * as actionTypes from './actionTypes';

const filterPlayersByNameDispatcher = (name) => {
    return {
        type: actionTypes.FILTER_PLAYERS_BY_NAME,
        payload: name
    }
}

export const filterPlayersByName = (name) => {
    return async (dispatch) => {
        dispatch(filterPlayersByNameDispatcher(name))
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