import * as actionTypes from "./actionTypes";
import RoundsService from "../../services/RoundsService";

const fetchRoundsDispatcher = (data) => {
    return {
        type: actionTypes.FETCH_ROUNDS,
        payload: data
    }
};

export const fetchRounds = () => {
    return async dispatch => {
        try {
            const {data} = await RoundsService.allRounds();
            return dispatch(fetchRoundsDispatcher(data))
        } catch(error) {
            console.log(error);
        }
    }
}