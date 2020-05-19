import React, {Component} from "react";
import CourtImg from '../../images/bbcourt.jpg';
import {connect} from 'react-redux';
import {handleFetchFantasyTeam, handleRemovePlayerFromFantasyTeam} from '../../redux/actions/fantasyTeamsActions';
import '../../css/EditTeamStyles.css';
import {PlayerJersey} from "../../components/fantasyTeams/PlayerJersey";
import PlayersListFilters from '../../components/fantasyTeams/PlayersListFilters';
import PlayersList from '../../components/fantasyTeams/PlayersList';

class EditFantasyTeam extends Component {

    componentDidMount() {
        this.props.fetchTeam(this.props.match.params.id);
    }

    removePlayer(playerId) {
        const players = this.props.team.players;
        this.props.removeFantasyPlayer(players, playerId);
    }

    render() {
        const {players, total_budget, used_budget} = this.props.team;
        const center = players ? players.filter(player => player.current_position === 'C')[0] : '';
        const powerForward = players ? players.filter(player => player.current_position === 'PF')[0] : '';
        const smallForward = players ? players.filter(player => player.current_position === 'SF')[0] : '';
        const shootingGuard = players ? players.filter(player => player.current_position === 'SG')[0] : '';
        const pointGuard = players ? players.filter(player => player.current_position === 'PG')[0] : '';

        let benchPlayers = [];
        let bench = players ? players.filter(player => player.current_position === 'B') : '';
        for(let i = 0; i < 7; i++) {
            let player = bench[i];
            benchPlayers.push(
                <PlayerJersey
                    key={i}
                    className="bench-player-jersey"
                    playerInfo={player}
                    removePlayer={(playerId) => this.removePlayer(playerId)}
                    position={player ? player.player.position : ''}
                />
            )
        }
        return (
            <>
                <div className="container mt-3">
                    <div className="team-info-panel p-3">
                        <div className="row">
                            <div className="col-sm-4">
                                <p className="mb-0">Budget</p>
                                <h2 className="mb-0">{total_budget}/{used_budget}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="court-overlay">
                                <img src={CourtImg} className="court-img" alt='bbal-court'/>
                                <div className="frontcourt-container">
                                    <PlayerJersey
                                        playerInfo={center}
                                        removePlayer={(playerId) => this.removePlayer(playerId)}
                                        position={'C'}
                                    />
                                    <PlayerJersey
                                        playerInfo={powerForward}
                                        position={'PF'}
                                        removePlayer={(playerId) => this.removePlayer(playerId)}
                                    />
                                </div>
                                <div className="midcourt-container">
                                    <PlayerJersey
                                        playerInfo={smallForward}
                                        position={'SF'}
                                        removePlayer={(playerId) => this.removePlayer(playerId)}
                                    />
                                    <PlayerJersey
                                        playerInfo={shootingGuard}
                                        position={'SG'}
                                        removePlayer={(playerId) => this.removePlayer(playerId)}
                                    />
                                </div>
                                <div className="backcourt-container">
                                    <PlayerJersey
                                        playerInfo={pointGuard}
                                        position={'PG'}
                                        removePlayer={(playerId) => this.removePlayer(playerId)}
                                    />
                                </div>
                            </div>
                            <div className="bench-players">
                                {benchPlayers}
                            </div>
                        </div>
                        <div className="col-md-5">
                            <PlayersListFilters />
                            <PlayersList />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        team: state.FantasyTeamsStore.team
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchTeam: (teamId) => dispatch(handleFetchFantasyTeam(teamId)),
        removeFantasyPlayer: (players, playerId) =>
            dispatch(handleRemovePlayerFromFantasyTeam(players, playerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFantasyTeam);