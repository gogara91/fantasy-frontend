import Http from './HttpService.js';

class FantasyTeamsService {
    create(data) {
        if(data.team_name.length < 1) {
            return Promise.reject('Team must have name.');
        }
        if(!data.user_id) {
            return Promise.reject('There\'s an error. please try logging in again.');
        }
        return Http.post('fantasy-teams', data);
    }
}

export default new FantasyTeamsService;