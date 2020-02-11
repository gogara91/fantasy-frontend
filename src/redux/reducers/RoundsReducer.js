import * as actionTypes from '../actions/actionTypes'

const initialState = {
    rounds: [],
};

export const RoundsStore = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case actionTypes.FETCH_ROUNDS:
            return {
                ...state,
                rounds: [...action.payload]
            };
        default:
            return state;
    }
};