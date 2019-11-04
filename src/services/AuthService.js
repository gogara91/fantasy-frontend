import Http from './HttpService.js';

class AuthService {
    register(data) {
        return Http.post('auth/register', data)
    }
}

export default new AuthService();