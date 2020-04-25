import Http from './HttpService.js';
class FantasyTeamsService {
    create(data) {
        return Http.post('fantasy-teams', data);
    }
}

export default new FantasyTeamsService;