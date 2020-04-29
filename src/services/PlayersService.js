import Http from './HttpService.js';

class PlayersService {
    getAllWithTeam() {
        return Http.get('players');
    }
}

export default new PlayersService();