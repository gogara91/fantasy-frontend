import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchGame} from "../../redux/actions/gamesActions";
import PlayersTableStartingPanel from '../../components/games/PlayersTableStartingPanel';
import {showErrorModal} from "../../redux/actions/errorActions";
import * as actionTypes from '../../redux/actions/actionTypes';
class StartGamePanel extends Component {
    state = {
        homeTeamLineup: [],
        homeTeamStarters: [],
        awayTeamLineup: [],
        awayTeamStarters: []
    };

    componentDidMount() {
        this.props.fetchGame(this.props.match.params.id)
    }

    pushToLineup = (playerId, team, callback = () => {}) => {
        let lineUp = [];
        let lineUpArrayName = '';
        let starters = [];
        let startersArrayName = '';
        if(team === 'home') {
            lineUp = this.state.homeTeamLineup;
            lineUpArrayName = 'homeTeamLineup';
            starters = this.state.homeTeamStarters;
            startersArrayName =  'homeTeamStarters';

        }

        if(team === 'away') {
            lineUp = this.state.awayTeamLineup;
            lineUpArrayName = 'awayTeamLineup'
            starters = this.state.awayTeamStarters;
            startersArrayName =  'awayTeamStarters';
        }

        let isInLineup = lineUp.includes(playerId);
        if(!isInLineup) {
            if(lineUp.length >= 12) {
                this.props.showErrorModal({
                    title: 'Warning!',
                    text: 'You already have 12 players in lineup.',
                    type: actionTypes.ERROR_WARNING
                });
                return;
            }
            return this.setState({
                ...this.state,
                [lineUpArrayName]: [...lineUp, playerId]
            });
        }
        return this.setState({
            ...this.state,
            [lineUpArrayName]: lineUp.filter(player => player !== playerId)
        }, () => {
            if(starters.includes(playerId)) {
                this.setState({
                    ...this.state,
                    [startersArrayName]: starters.filter(player => player !== playerId)
                })
            }
        })
    };

    pushToStarters = (playerId, team) => {
        let starters = [];
        let startersArrayName = '';
        let lineup = [];
        if(team === 'home') {
            lineup = this.state.homeTeamLineup;
            starters = this.state.homeTeamStarters;
            startersArrayName = 'homeTeamStarters';
        }

        if(team === 'away') {
            lineup = this.state.awayTeamLineup;
            starters = this.state.awayTeamStarters;
            startersArrayName = 'awayTeamStarters';
        }

        const isStarter = starters.includes(playerId);
        const isInLineup = lineup.includes(playerId);
        if(!isStarter) {
            if(starters.length >= 5) {
                this.props.showErrorModal({
                    title: 'Warning!',
                    text: 'Already have full starting lineup.',
                    type: actionTypes.ERROR_WARNING
                });
                return;
            }
            this.setState({
                ...this.state,
                [startersArrayName]: [...starters, playerId]
            }, () => {
                if(!isInLineup) {
                    if(lineup.length >= 12) {
                        this.props.showErrorModal({
                            title: 'Warning!',
                            text: 'Already have full lineup.',
                            type: actionTypes.ERROR_WARNING
                        });
                        this.setState({
                            ...this.state,
                            [startersArrayName]: starters.filter(starter => starter !== playerId)
                        });
                        return;
                    }
                    this.pushToLineup(playerId, team);
                }
            });
            return;
        }

        this.setState({
            ...this.state,
            [startersArrayName]: starters.filter(starter => starter !== playerId)
        });
    };

    render() {
        const {home_team, away_team} = this.props.game;

        const homeTeamTable = home_team ? <PlayersTableStartingPanel
            team={home_team}
            lineup={this.state.homeTeamLineup}
            starters={this.state.homeTeamStarters}
            pushToLineup={(id) => this.pushToLineup(id, 'home')}
            pushToStarters={(id) => this.pushToStarters(id, 'home')}
        /> : '';

        const awayTeamTable = away_team ? <PlayersTableStartingPanel
            team={away_team}
            lineup={this.state.awayTeamLineup}
            starters={this.state.awayTeamStarters}
            pushToLineup={(id) => this.pushToLineup(id, 'away')}
            pushToStarters={(id) => this.pushToStarters(id, 'away')}
        /> : '';

        return (
            <div className="row">
                <div className="col-md-6">{homeTeamTable}</div>
                <div className="col-md-6">{awayTeamTable}</div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        game: state.GamesStore.game
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchGame: (gameId) => dispatch(fetchGame(gameId)),
        showErrorModal: (data) => dispatch(showErrorModal(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StartGamePanel);