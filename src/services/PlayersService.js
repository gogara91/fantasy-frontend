import Http from './HttpService.js';

class PlayersService {
    getAllWithTeam() {
        return Http.get('players');
    }

    filterPlayers(players, name = '', teams = [], orderBy= '') {
        let filteredPlayers = [...players];
        if(name.length) {
            filteredPlayers = filteredPlayers.filter(
                player => {
                    if(
                        (`${player.first_name} ${player.last_name}`)
                            .toLowerCase()
                            .includes(name.toLowerCase()) ||
                        (`${player.last_name} ${player.first_name}`)
                            .toLowerCase()
                            .includes(name.toLowerCase())
                    ) {
                        return true;
                    }
                    return false;
                }
            );
        }
        if(teams.length) {
            const selectedTeamIds = teams.map(team => team.key);
            filteredPlayers = filteredPlayers.filter(
                player => {
                    return selectedTeamIds.includes(player.team[0].id);
                }
            )
        }
        if(orderBy) {
            switch (orderBy) {
                case 'name_desc':
                    filteredPlayers = this.sortBy(
                        'first_name',
                        filteredPlayers
                    );
                    break;
                case 'name_asc':
                    filteredPlayers = this.sortBy(
                        'first_name',
                        filteredPlayers,
                        false
                    );
                    break;
                case 'credits_desc':
                    filteredPlayers = this.sortBy(
                        'fantasy_cost',
                        filteredPlayers
                    );
                    break;
                case 'credits_asc':
                    filteredPlayers = this.sortBy(
                        'fantasy_cost',
                        filteredPlayers,
                        false
                    );
                    break;
            }
        }
        return filteredPlayers;
    }

    sortBy(propertyName, items, asc = true) {
        function compare( a, b ) {
            let firstProp = a[propertyName];
            let secondProp = b[propertyName];

            if(propertyName.toLowerCase() === 'fantasy_cost') {
                firstProp = parseFloat(firstProp);
                secondProp = parseFloat(secondProp);
            }

            if ( firstProp < secondProp ){
                return asc ? 1 : -1;
            }
            if ( firstProp > secondProp ){
                return asc ? -1 : 1;
            }
            return 0;
        }

        return items.sort(compare);
    }
}

export default new PlayersService();