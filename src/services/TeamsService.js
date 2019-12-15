import Http from './HttpService.js';

class TeamsService {
    allTeams() {
        return Http.get('teams');
    }

    team(id) {
        return Http.get('teams/' + id);
    }
}

export default new TeamsService();