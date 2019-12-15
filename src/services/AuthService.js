import Http from './HttpService.js';

class AuthService {
    register(data) {
        return Http.post('auth/register', data)
    }
    attemptLogin(data) {
        return Http.post('auth/login', data);
    }
    handleSuccessfulLogin(data) {
        console.log(data);
        localStorage.setItem('auth_token', data.access_token)
    }
}

export default new AuthService();