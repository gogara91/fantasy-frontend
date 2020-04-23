import GamesService from '../../services/GamesService'
import * as actionTypes from './actionTypes';
import {showErrorModal} from "./errorActions";

const fetchGamesDispatcher = (data) => {
    return {
        type: actionTypes.FETCH_GAMES,
        payload: data
    }
};

export const fetchGames = () => {
    return async dispatch => {
        try {
            const { data } = await GamesService.allGames();
            return dispatch(fetchGamesDispatcher(data))
        } catch(error) {
            return dispatch(showErrorModal({
                title: 'Error!',
                text: 'No games have been found!',
                type: actionTypes.ERROR_DANGER
            }))
        }
    }
};

const startGameDispatcher = (data) => {
    return {
        type: actionTypes.START_GAME,
        payload: data,
    }
};

export const startGame = (gameId, data) => {
    return async dispatch => {
        try {
            await GamesService.startGame(gameId, data);
        } catch(e) {
            return Promise.reject(e.response.data);
        }
    }
};


const fetchGameDispatcher = (data) => {
    return {
        type: actionTypes.FETCH_GAME,
        payload: data,
    }
};

export const fetchGame = (gameId) => {
    return async (dispatch) => {
        try {
            const {data} = await GamesService.fetchGame(gameId);
            return dispatch(fetchGameDispatcher(data))
        } catch (e) {
            return dispatch(showErrorModal({
                title: 'Error!',
                text: 'Game not found!',
                type: actionTypes.ERROR_DANGER
            }));
        }
    }
};


const fetchLiveGameDispatcher = (data) => {
    return {
        type: actionTypes.FETCH_LIVE_GAME,
        payload: data
    }
};

export const fetchLiveGame = (gameId) => {
    return async (dispatch) => {
        try {
            const {data} = await GamesService.fetchLiveGame(gameId);
            dispatch(fetchLiveGameDispatcher(data));
        } catch (e) {
            showErrorModal({
                title: 'Ooops!',
                text: 'Something went wrong!',
                type: actionTypes.ERROR_DANGER
            });
        }
    }
};

export const addGameStats = (data) => {
    return async dispatch => {
        dispatch({
                type: actionTypes.ADD_GAME_STATS,
                payload: data
            })
    }
}