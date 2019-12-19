import authService from '../../services/AuthService';
import * as actionTypes from './actionTypes';

const handleLoginDispatcher = (data) => {
    return {
        type: actionTypes.HANDLE_LOGIN_SUCCESS,
        payload: data
    }
};

export const handleLogin = (credentials) => {
    return (dispatch) => {
        authService.attemptLogin(credentials)
            .then(function(response){
                authService.setToken(response);
                authService.getUserData()
                    .then(function(response) {
                        authService.setUser(response);
                        dispatch(handleLoginDispatcher(response.data));
                    })
            });
    }
}

export const handleLogout = () => {
    authService.handleLogout();
    return {
        type: actionTypes.HANDLE_LOGOUT
    }
}