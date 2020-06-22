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

    addPlayer(playerId, teamId) {
        return Http.post(`fantasy-teams/${teamId}/add-player`, {player_id: playerId});
    }

    removePlayer(playerId) {
        return Http.delete(`fantasy-teams/${playerId}`);
    }

    replacePlayers(players, teamId) {
        return Http.put(`fantasy-teams/${teamId}/replace-players`, players)
    }
}

export default new FantasyTeamsService();