import React, { Component } from 'react';
import TeamRow from '../../components/teams/TeamRow.js';
import {connect} from 'react-redux';
import {fetchTeams} from '../../redux/actions/teamsActions'
import PageTitle from "../../components/partials/PageTitle";

class Teams extends Component {
    componentDidMount() {
        this.props.getTeams();
    }

    render() {
        let teams = <h1>No teams found...</h1>;
        if(this.props.teams) {
            teams = this.props.teams.map(team => <TeamRow key={team.id} team={team}></TeamRow>)
        }
        return (
            <>
            <PageTitle title='Teams' />
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <td>Team</td>
                        <td>City</td>
                        <td>Conference</td>
                        <td>Division</td>
                        <td>Name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>{teams}</tbody>
            </table>
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