import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isAuthenticated: false,
};

const authStore = (state= initialState, action) => {
    switch(action.type) {
        case actionTypes.HANDLE_LOGIN_SUCCESS:
            return {
                isAuthenticated: true
            }
    }
}