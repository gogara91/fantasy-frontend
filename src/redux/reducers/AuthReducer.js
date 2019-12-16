import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isAuthenticated: false,
};

export const authStore = (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.HANDLE_LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case actionTypes.HANDLE_LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            }
        default: return state;
    }
};
