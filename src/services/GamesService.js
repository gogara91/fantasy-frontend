import Http from './HttpService.js';

class TeamsService {
    allGames() {
        return Http.get('games');
    }

    startGame(gameId, data) {
        return Http.post('games/start-game/' + gameId, data)
    }

    fetchGame(gameId) {
        return Http.get('/games/' + gameId)
    }

    fetchLiveGame(gameId) {
        return Http.get(`/games/live-game/${gameId}`)
    }
}

export default new TeamsService();