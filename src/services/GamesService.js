import Http from './HttpService.js';

class TeamsService {
    allGames() {
        return Http.get('games');
    }
}

export default new TeamsService();