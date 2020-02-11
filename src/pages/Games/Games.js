import React, {Component} from 'react';
import { connect } from 'react-redux';
import PageTitle from "../../components/partials/PageTitle";
import {fetchGames} from "../../redux/actions/gamesActions";
import {fetchRounds} from "../../redux/actions/roundsActions";

class Games extends Component {
    componentDidMount() {
        this.props.fetchGames();
        this.props.fetchRounds();
    }

    render() {
        return (
            <div>
                <PageTitle title="Games"></PageTitle>
            </div>
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