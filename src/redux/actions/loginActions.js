import authService from '../../services/AuthService';
import * as actionTypes from './actionTypes';

const handleLoginDispatcher = () => {
    return {
        type: actionTypes.HANDLE_LOGIN_SUCCESS,
    }
};

export const handleLogin = (credentials) => {
    return async (dispatch) => {
        try {
            const { data } = await authService.attemptLogin(credentials)
            authService.handleSuccessfulLogin(data)
            dispatch(handleLoginDispatcher());
        }
        catch(e) {

        }
    }
}