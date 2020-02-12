import React, {Component} from 'react';
import { connect } from 'react-redux';
import PageTitle from "../../components/partials/PageTitle";
import {fetchGames} from "../../redux/actions/gamesActions";
import {fetchRounds} from "../../redux/actions/roundsActions";
import GameRow from "../../components/games/GameRow";
class Games extends Component {

    state = {
        showRounds: false,
        showGames: false,
        currentRound: '',
        roundsList: [],
        visibleGames: [],
    };


    componentDidMount() {
        this.props.fetchGames();
        this.props.fetchRounds();
    }

    handleSeasonChange = (e) => {
        const season = this.props.rounds.filter(season => season.id == e.target.value)[0];
        this.setState({
            ...this.state,
            roundsList: season.rounds,
            showRounds: true
        });
    };

    handleRoundChange = (e) => {
        const visibleGames = this.props.games.filter(game => game.round.id == e.target.value);
        this.setState({
            ...this.state,
            visibleGames,
            showGames: true,
        })

    }

    render() {
        const seasonsDropdownItems = this.props.rounds.map(season => {
            return (
                <option key={season.id} value={season.id}>{season.year}</option>
            )
        });

        const seasonsDropdown = (
            <select
                className="form-control"
                defaultValue={'DEFAULT'}
                onChange={this.handleSeasonChange}
            >
                <option disabled={true} value="DEFAULT">Choose season...</option>
                {seasonsDropdownItems}
            </select>
        );

        const roundsDropdownItems = this.state.roundsList.map(round => {
            return (
                <option key={round.id} value={round.id}>{round.number}</option>
            )
        });

        const gameRows = this.state.visibleGames.map(game => {
            return (
                <GameRow game={game} key={game.id}></GameRow>
            )
        });

        const roundsDropdown = (
            <select
                className="form-control"
                defaultValue={'DEFAULT'}
                onChange={this.handleRoundChange}
            >
                <option disabled={true} value="DEFAULT">Choose round...</option>
                {roundsDropdownItems}
            </select>
        );
        return (
            <>
                <PageTitle title="Games"></PageTitle>
                <div className="row">
                    <div className="col-md-3">
                        <label>Season:</label>
                        {seasonsDropdown}
                    </div>
                    {this.state.showRounds ? <div className="col-md-3">
                        <label>Round:</label>
                        {roundsDropdown}
                    </div> : ''
                    }
                </div>
                {this.state.showGames ?
                <div className="row">
                    <div class="col-md-12">
                        <table className="table table-striped table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Round</th>
                                    <th>Home team</th>
                                    <th>Away team</th>
                                    <th>Score</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gameRows}
                            </tbody>
                        </table>
                    </div>
                </div>
                : ''}
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        games: state.GamesStore.games,
        rounds: state.RoundsStore.rounds
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchGames: () => dispatch(fetchGames()),
        fetchRounds: () => dispatch(fetchRounds()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);