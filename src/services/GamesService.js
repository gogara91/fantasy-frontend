import Http from './HttpService.js';

class TeamsService {
    allGames() {
        return Http.get('games');
    }

    startGame(gameId) {
        return Http.put('games/start-game/' + gameId)
    }

    fetchGame(gameId) {
        return Http.get('/games/' + gameId)
    }
}

export default new TeamsService();