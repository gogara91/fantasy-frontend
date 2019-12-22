import Http from './HttpService.js';
import { HANDLE_LOGIN_SUCCESS } from '../redux/actions/actionTypes';
import store from '../redux/store';
import LocalStorageService from "./LocalStorageService";
class AuthService {
    token = '';
    user = {};

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
    getUserData() {
        return Http.post('auth/me ');
    }

    setToken(tokenData) {
        return new Promise((resolve, reject) => {
            LocalStorageService.setItem('auth_token', tokenData.data.access_token);
            Http.Axios().defaults.headers.common['Authorization'] = `Bearer ${tokenData.data.access_token}`
            resolve();
        })
    }

    setUser(userData) {
        LocalStorageService.setItem('user', JSON.stringify(userData.data));
    }

    handleLogout() {
        LocalStorageService.clearAuthStorage();
    }

    isAuthenticated() {
        const token = localStorage.getItem('auth_token');
        const user = localStorage.getItem('user');
        if(!token || !user) {
            return false;
        }
        this.token = token;
        this.user = JSON.parse(user);
        return true;
    }

    loginIfAuthenticated() {
        if(!this.token) {
            return;
        }
        store.dispatch({ type: HANDLE_LOGIN_SUCCESS, payload: this.user });
        Http.Axios().defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
    }
}

export default new AuthService();