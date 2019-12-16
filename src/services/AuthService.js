import Http from './HttpService.js';
import { HANDLE_LOGIN_SUCCESS } from '../redux/actions/actionTypes'
import store from '../redux/store'
class AuthService {
    token = '';
    constructor() {
        this.isAuthenticated();
        this.loginIfAuthenticated();
    }

    register(data) {
        return Http.post('auth/register', data)
    }

    attemptLogin(data) {
        return Http.post('auth/login', data);
    }

    handleSuccessfulLogin(data) {
        localStorage.setItem('auth_token', data.access_token)
    }

    handleLogout() {
        localStorage.removeItem('auth_token');
    }

    isAuthenticated() {
        const token = localStorage.getItem('auth_token');
        if(!token) {
            return false;
        }
        this.token = token;
        return true;
    }

    loginIfAuthenticated() {
        if(!this.token) {
            return;
        }
        store.dispatch({ type: HANDLE_LOGIN_SUCCESS })
        Http.Axios().defaults.headers.common['Authorization'] = `Bearer ${this.token}`

    }
}

export default new AuthService();