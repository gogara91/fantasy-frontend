import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeam, fetchTeamGames } from '../../redux/actions/teamsActions';
import CardNav from '../../components/partials/CardNav';
import CardNavLink from '../../components/partials/CardNavLink';
import PageTitle from '../../components/partials/PageTitle';
import TeamHomePage from '../../components/teams/TeamHomePage'
import TeamGames from '../../components/teams/TeamGames'
import { Switch, Route, Link } from 'react-router-dom';
class Team extends Component {

    componentDidMount() {
        this.props.fetchTeam(this.props.match.params.id);
        this.props.fetchTeamGames(this.props.match.params.id);
    }

    render() {
        let teamId = this.props.match.params.id;
        let {full_name} = this.props.team;

        return (
            <>
                <CardNav>
                    <CardNavLink to={`/teams/${teamId}`}>Home</CardNavLink>
                    <CardNavLink to={`/teams/${teamId}/games`}>Teams</CardNavLink>
                </CardNav>
                <PageTitle title={full_name}></PageTitle>
                
                <Switch>
                    <Route exact path='/teams/:id'>
                        <TeamHomePage team={this.props.team}></TeamHomePage>
                    </Route>
                    <Route exact path='/teams/:id/games'>
                        <TeamGames games={this.props.teamGames}></TeamGames>
                    </Route>
                </Switch>
            </>
    )
    }
}

const mapStateToProps = state => {
    return(
        {
            team: state.TeamsStore.team,
            teamGames: state.TeamsStore.teamGames
        }
    )
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTeam: (id) => dispatch(fetchTeam(id)),
        fetchTeamGames: (id) => dispatch(fetchTeamGames(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);