import Http from './HttpService.js';

class RoundsService {
    allRounds() {
        return Http.get('rounds');
    }
}

export default new RoundsService();