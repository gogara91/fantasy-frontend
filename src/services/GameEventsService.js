import Http from './HttpService.js';

export default class GameEventsService {
    statTypes;
    player_id;
    game_id;
    constructor(statTypes) {
        this.statTypes = statTypes;
    }

    setPTS() {
        const type = this.statTypes.filter(type => type.abbreviation === 'FTA');
    }

    async saveStats(data) {
        this.player_id = data.player_id
        this.game_id = data.game_id
        const stats = this.getAllStats(data.stat_type);

        return Http.post('game-events', {stats});
    }

    getAllStats(stat) {
        let stats = [stat];
        let pts = 0;
        switch (stat.abbreviation) {
            case 'FTM':
                stats = [...this.statTypes.filter(({abbreviation}) => {
                       return abbreviation === 'FTM' ||
                        abbreviation === 'FTA' ||
                        abbreviation === 'PTS'
                    }
                )];
                console.log('1');
                pts = 1;
                break;
            case '2FGM':
                stats = [...this.statTypes.filter(({abbreviation}) => {
                        return abbreviation === '2FGM' ||
                        abbreviation === '2FGA' ||
                        abbreviation === 'PTS'
                    }
                )];
                pts = 2;
                break;
            case '3FGM':
                stats = [...this.statTypes.filter(({abbreviation}) => {
                        return abbreviation === '3FGM' ||
                        abbreviation === '3FGA' ||
                        abbreviation === 'PTS'
                    }
                )];
                pts = 3;
                break;
        }
        return stats.map(stat => {
            let data = {
                stat_type_id: stat.id,
                game_id: this.game_id,
                player_id: this.player_id,
                value: stat.default_value,
            };
            if(stat.abbreviation === 'PTS') {
                data.value = pts;
            }
            return data;
        });
    }

}
