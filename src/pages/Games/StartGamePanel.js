import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchGame, startGame} from "../../redux/actions/gamesActions";
import PlayersTableStartingPanel from '../../components/games/PlayersTableStartingPanel';
import {showErrorModal} from "../../redux/actions/errorActions";
import {Redirect} from 'react-router-dom'

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

    pushToLineup = (playerId, team) => {
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

    startGame = () => {
        const {homeTeamLineup, homeTeamStarters, awayTeamLineup, awayTeamStarters} = this.state;

        if(homeTeamLineup.length < 5) {
            this.props.showErrorModal({
                title: 'Error!',
                text: 'Please select lineup for home team.',
                type: actionTypes.ERROR_DANGER
            });
            return;
        }

        if(homeTeamStarters.length < 5) {
            this.props.showErrorModal({
                title: 'Error!',
                text: 'Please select starters for home team.',
                type: actionTypes.ERROR_DANGER
            });
            return;
        }

        if(awayTeamLineup.length < 5) {
            this.props.showErrorModal({
                title: 'Error!',
                text: 'Please select lineup for away team.',
                type: actionTypes.ERROR_DANGER
            });
            return;
        }

        if(awayTeamStarters.length < 5) {
            this.props.showErrorModal({
                title: 'Error!',
                text: 'Please select starters for away team.',
                type: actionTypes.ERROR_DANGER
            });
            return;
        }
        if(homeTeamLineup.length < 12) {
            if(!window.confirm('Your away team lineup isn\'t full (12 players), are you sure you want to continue?')) {
                return;
            }
        }

        if(awayTeamLineup.length < 12) {
            if(!window.confirm('Your home team lineup isn\'t full (12 players), are you sure you want to continue?')) {
                return;
            }
        }
        this.props.startGame(this.props.game.id, {
            homeTeamLineup,
            homeTeamStarters,
            awayTeamLineup,
            awayTeamStarters
        }).then((response) => {
            this.props.history.push('/live-game-panel/' + this.props.game.id)

        }).catch((e) => {
            this.props.showErrorModal({
                title: 'Error!',
                text: e,
                type: actionTypes.ERROR_DANGER
            });
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
            <>
                <div className="row">
                    <div className="col-md-6">{homeTeamTable}</div>
                    <div className="col-md-6">{awayTeamTable}</div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-right mb-3">
                        <button
                            className="btn btn-sm btn-outline-success"
                            onClick={this.startGame}
                        >Start game</button>
                    </div>
                </div>
            </>
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
        showErrorModal: (data) => dispatch(showErrorModal(data)),
        startGame: (id, data) => dispatch(startGame(id, data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StartGamePanel);