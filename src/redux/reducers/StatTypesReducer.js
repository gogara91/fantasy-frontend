import * as actionTypes from '../actions/actionTypes';

const initialState = {
    statTypes: []
};

export const StatTypesStore =  (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_STAT_TYPES:
            return {
                ...state,
                statTypes: action.payload,
            };
        default:
            return state;
    }
}