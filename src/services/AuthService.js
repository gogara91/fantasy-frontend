import Http from './HttpService.js';

class AuthService {
    register(data) {
        return Http.post('auth/register', data)
    }
    attemptLogin(data) {
        return Http.post('auth/login', data);
    }
    handleSuccessfulLogin(data) {
        
    }
}

export default new AuthService();