import React, { Component } from 'react';
import Team from '../components/teams/Team.js';
import {redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchTeams} from '../redux/actions/teamsActions'
import {TeamsStore} from "../redux/reducers/teamsReducer";

class Teams extends Component {
    componentDidMount() {
        this.props.getTeams();
    }

    render() {
        let teams = <h1>No teams found...</h1>;
        if(this.props.teams) {
            teams = this.props.teams.map(team => <Team key={team.id} team={team}></Team>)
        }
        return (
            <>
                {teams}
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        teams: state.TeamsStore.teams
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTeams: () => dispatch(fetchTeams())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams);