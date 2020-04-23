import Http from './HttpService.js';

export default class GameEventsService {
    statTypes;
    player_id;
    game_id;
    stats = [];
    constructor(statTypes) {
        this.statTypes = statTypes;
    }

    setPTS() {
        const type = this.statTypes.filter(type => type.abbreviation === 'FTA');
    }
    setStat(data) {
        this.player_id = data.player_id
        this.game_id = data.game_id
        this.getAllStats(data.stat_type);
    }
    async saveStats(data) {
        this.player_id = data.player_id
        this.game_id = data.game_id
        this.getAllStats(data.stat_type);
        console.log(this.stats);
        return Http.post('game-events', {stats: this.stats});
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
                pts = 1;
                break;
            case '2FGM':
                stats = [...this.statTypes.filter(({abbreviation}) => {
                        return abbreviation === '2FGM' ||
                        abbreviation === '2FGA' ||
                        abbreviation === 'FGA' ||
                        abbreviation === 'FGM' ||
                        abbreviation === 'PTS'
                    }
                )];
                pts = 2;
                break;
            case '2FGA':
                stats = [...this.statTypes.filter(({abbreviation}) => {
                        return abbreviation === 'FGA' ||
                            abbreviation === '2FGA'
                    }
                )];
                break;
            case '3FGM':
                stats = [...this.statTypes.filter(({abbreviation}) => {
                        return abbreviation === '3FGM' ||
                        abbreviation === '3FGA' ||
                        abbreviation === 'FGA' ||
                        abbreviation === 'FGM' ||
                        abbreviation === 'PTS'
                    }
                )];
                pts = 3;
                break;
            case '3FGA':
                stats = [...this.statTypes.filter(({abbreviation}) => {
                        return abbreviation === 'FGA' ||
                        abbreviation === '3FGA'
                    }
                )];
                break;
            case 'TO':
                stats = [...this.statTypes.filter(({abbreviation}) => {
                        return abbreviation === 'TO'
                    }
                )];
                break;
            case 'BLK_AG':
                stats = [...this.statTypes.filter(({abbreviation}) => {
                        return abbreviation === 'BLK_AG'
                    }
                )];
                break;
            case 'PF_RV':
                stats = [...this.statTypes.filter(({abbreviation}) => {
                        return abbreviation === 'PF_RV'
                    }
                )];
                break;
        }
        const data = stats.map(stat => {
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
        this.stats = [...this.stats, ...data];
    }

}
