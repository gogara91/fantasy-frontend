import Http from './HttpService.js';

class TeamsService {
    allTeams() {
        return Http.get('teams');
    }
}

export default new TeamsService();