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



