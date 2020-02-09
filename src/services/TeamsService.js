import Http from './HttpService.js';

class TeamsService {
    allTeams() {
        return Http.get('teams');
    }

    team(id) {
        return Http.get('teams/' + id);
    }

    teamGames(teamId) {
        return Http.get('teams/games/' + teamId)
    }


    teamScores(teamId) {
        return Http.get('teams/scores/' + teamId)
    }

    update(id, payload) {
        return Http.put('/teams/' + id, payload);
    }
}

export default new TeamsService();