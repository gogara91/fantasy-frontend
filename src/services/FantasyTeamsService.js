import Http from './HttpService.js';
class FantasyTeamsService {

    getUserTeams(userId) {
        return Http.get('users/' + userId)
    }

    getTeam(teamId) {
        return Http.get('fantasy-teams/' + teamId)
    }

    create(data) {
        return Http.post('fantasy-teams', data);
    }
}

export default new FantasyTeamsService;