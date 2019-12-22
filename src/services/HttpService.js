import Axios from 'axios';
import store from '../redux/store'
import LocalStorageService from "./LocalStorageService";
import { HANDLE_LOGOUT } from '../redux/actions/actionTypes'
const Http = Axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
});

class HttpService {
    get(url) {
        this.checkIfAuthenticated();
        return Http.get(url);
    }

    post(url, data) {
        this.checkIfAuthenticated();
        return Http.post(url, data);
    }

    put(url, data) {
        this.checkIfAuthenticated();
        return Http.put(url,data);
    }

    patch(url, data) {
        this.checkIfAuthenticated();
        return Http.patch(url, data);
    }

    delete(url) {
        this.checkIfAuthenticated();
        return Http.delete(url);
    }

    Axios() {
        return Http;
    }

    checkIfAuthenticated() {
        Http.interceptors.response.use(
            response => {
            return response;
        }, error => {
            if (error.response.status === 401) {
                store.dispatch({type: HANDLE_LOGOUT});
                LocalStorageService.clearAuthStorage();
            }
            return Promise.reject(error);
        });
    }
}

export default new HttpService();