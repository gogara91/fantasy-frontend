import authService from '../../services/AuthService';
import * as actionTypes from './actionTypes';

const handleLoginDispatcher = (data) => {
    return {
        type: actionTypes.HANDLE_LOGIN_SUCCESS,
        payload: data
    }
};

export const handleLogin = (credentials) => {
    return async (dispatch) => {
        const tokenData = await authService.attemptLogin(credentials);
        await authService.setToken(tokenData);
        const userData = await authService.getUserData();
        authService.setUser(userData);
        dispatch(handleLoginDispatcher(userData.data));
    }
};

export const handleRegister = user => {
    return async (dispatch) => {
        try {
            await authService.register(user);
            handleLogin(user);
        } catch(error) {
             return Promise.reject(error.response.data);
        }

    }
}


export const handleLogout = () => {
    authService.handleLogout();
    return {
        type: actionTypes.HANDLE_LOGOUT
    }
};