import React, {Component} from "react";
import CourtImg from '../../images/bbcourt.jpg';
import {connect} from 'react-redux';
import {handleFetchFantasyTeam, handleReplacePlayers, handleRemovePlayerFromFantasyTeam} from '../../redux/actions/fantasyTeamsActions';
import '../../css/EditTeamStyles.css';
import {PlayerJersey} from "../../components/fantasyTeams/PlayerJersey";
import PlayersListFilters from '../../components/fantasyTeams/PlayersListFilters';
import PlayersList from '../../components/fantasyTeams/PlayersList';
import PlayerInfoModal from "../../components/fantasyTeams/PlayerInfoModal";
class EditFantasyTeam extends Component {
    
    state = {
        draggedPlayer: '',
        playerToBeDroppedOn: '',
        showPlayerInfoModal: false,
        playerInfo: {}
    }
    
    componentDidMount() {
        this.props.fetchTeam(this.props.match.params.id);
    }

    removePlayer(playerId) {
        const players = this.props.team.players;
        this.props.removeFantasyPlayer(players, playerId);
    }

    hidePlayerInfoModal() {
        this.setState({...this.state, showPlayerInfoModal: false})
    }

    setDraggedPlayer(playerId) {
        this.setState({
            ...this.state,
            draggedPlayer: playerId,
        });
    }
    
    setToBeDroppedOn(playerId) {
        this.setState({
            ...this.state,
            playerToBeDroppedOn: playerId
        });

    }

    replacePlayers() {
        const teamId = this.props.match.params.id;
        this.props.replacePlayers({
            player_1: this.state.draggedPlayer,
            player_2: this.state.playerToBeDroppedOn
        }, teamId)

    }
    showPlayerInfo(player) {
        this.setState({
            ...this.state,
            showPlayerInfoModal: true,
            playerInfo: player
        })
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
                    position={player ? player.player.position : ''}
                    removePlayer={(playerId) => this.removePlayer(playerId)}
                    setDraggedPlayer={(id)=> this.setDraggedPlayer(id)}
                    setToBeDroppedOn={(id)=> this.setToBeDroppedOn(id)}
                    replacePlayers={() => this.replacePlayers()}
                    onClick={(player) => this.showPlayerInfo(player)}
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
                                        position={'C'}
                                        removePlayer={(playerId) => this.removePlayer(playerId)}
                                        setDraggedPlayer={(id)=> this.setDraggedPlayer(id)}
                                        setToBeDroppedOn={(id)=> this.setToBeDroppedOn(id)}
                                        replacePlayers={() => this.replacePlayers()}
                                        onClick={(player) => this.showPlayerInfo(player)}
                                    />
                                    <PlayerJersey
                                        playerInfo={powerForward}
                                        position={'PF'}
                                        removePlayer={(playerId) => this.removePlayer(playerId)}
                                        setDraggedPlayer={(id)=> this.setDraggedPlayer(id)}
                                        setToBeDroppedOn={(id)=> this.setToBeDroppedOn(id)}
                                        replacePlayers={() => this.replacePlayers()}
                                        onClick={(player) => this.showPlayerInfo(player)}
                                        />
                                </div>
                                <div className="midcourt-container">
                                    <PlayerJersey
                                        playerInfo={smallForward}
                                        position={'SF'}
                                        removePlayer={(playerId) => this.removePlayer(playerId)}
                                        setDraggedPlayer={(id)=> this.setDraggedPlayer(id)}
                                        setToBeDroppedOn={(id)=> this.setToBeDroppedOn(id)}
                                        replacePlayers={() => this.replacePlayers()}
                                        onClick={(player) => this.showPlayerInfo(player)}
                                    />
                                    <PlayerJersey
                                        playerInfo={shootingGuard}
                                        position={'SG'}
                                        removePlayer={(playerId) => this.removePlayer(playerId)}
                                        setDraggedPlayer={(id)=> this.setDraggedPlayer(id)}
                                        setToBeDroppedOn={(id)=> this.setToBeDroppedOn(id)}
                                        replacePlayers={() => this.replacePlayers()}
                                        onClick={(player) => this.showPlayerInfo(player)}
                                    />
                                </div>
                                <div className="backcourt-container">
                                    <PlayerJersey
                                        playerInfo={pointGuard}
                                        position={'PG'}
                                        removePlayer={(playerId) => this.removePlayer(playerId)}
                                        setDraggedPlayer={(id)=> this.setDraggedPlayer(id)}
                                        setToBeDroppedOn={(id)=> this.setToBeDroppedOn(id)}
                                        replacePlayers={() => this.replacePlayers()}
                                        onClick={(player) => this.showPlayerInfo(player)}
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
                <PlayerInfoModal
                    hideModal={() => this.hidePlayerInfoModal()}
                    showModal={this.state.showPlayerInfoModal}
                    player={this.state.playerInfo}
                />
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
            dispatch(handleRemovePlayerFromFantasyTeam(players, playerId)),
        replacePlayers: (players, teamId) => dispatch(handleReplacePlayers(players, teamId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFantasyTeam);