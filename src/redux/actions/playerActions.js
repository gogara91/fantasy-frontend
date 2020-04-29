import PlayersService from '../../services/PlayersService'
import * as actionTypes from './actionTypes';
import {showErrorModal} from "./errorActions";

const fetchAllPlayersDispatcher = (data) => {
    return {
        type: actionTypes.FETCH_PLAYERS_WITH_TEAM,
        payload: data
    }
}

export const fetchAllPlayers = () => {
    return async (dispatch) => {
        try {
            const {data} = await PlayersService.getAllWithTeam();
            dispatch(fetchAllPlayersDispatcher(data));
        } catch(e) {
            dispatch(showErrorModal({
                title: 'Error!',
                text: 'Player list not loaded!',
                type: actionTypes.ERROR_DANGER
            }));
        }
    }
}
