import Http from './HttpService.js';

class TeamsService {
    allTeams() {
        return Http.get('teams');
    }

    team(id) {
        return Http.get('teams/' + id);
    }

    update(id, payload) {
        return Http.put('/teams/' + id, payload);
    }
}

export default new TeamsService();