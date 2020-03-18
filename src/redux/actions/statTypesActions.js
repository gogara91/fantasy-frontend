import * as actionTypes from "./actionTypes";
import StatTypesService from "../../services/StatTypesService";
const fetchStatTypesDispatcher = (data) =>  {
    return {
        type: actionTypes.FETCH_STAT_TYPES,
        payload: data
    }
}

export const fetchStatTypes = () => {
    return async (dispatch) => {
        try {
            const {data} = await StatTypesService.all();
            dispatch(fetchStatTypesDispatcher(data));
        } catch(error) {

        }
    }
}