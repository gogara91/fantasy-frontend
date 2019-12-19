import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isAuthenticated: false,
    isAdmin: false,
    user: {},
};

export const authStore = (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.HANDLE_LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                isAdmin: action.payload.user_level === 9,
                user: {...action.payload}
            }
        case actionTypes.HANDLE_LOGOUT:
            return {
                ...state,
                isAdmin: false,
                user: {},
                isAuthenticated: false
            }
        default: return state;
    }
};
