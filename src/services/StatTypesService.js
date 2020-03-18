import Http from './HttpService.js';

class StatTypesService {
    all() {
        return Http.get('stat-types');
    }
}

export default new StatTypesService();