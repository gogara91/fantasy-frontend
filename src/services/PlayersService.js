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
        return filteredPlayers;
    }
}

export default new PlayersService();