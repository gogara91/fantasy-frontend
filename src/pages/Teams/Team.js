import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeam } from '../../redux/actions/teamsActions';
import CardNav from '../../components/partials/CardNav';
import CardNavLink from '../../components/partials/CardNavLink';
import PageTitle from '../../components/partials/PageTitle';
import TeamHomePage from '../../components/teams/TeamHomePage'
import TeamGames from '../../components/teams/TeamGames'
import TeamScores from '../../components/teams/TeamScores'
import { Switch, Route, Link } from 'react-router-dom';

class Team extends Component {

    componentDidMount() {
        this.props.fetchTeam(this.props.match.params.id);
    }

    render() {
        let teamId = this.props.match.params.id;
        let {full_name} = this.props.team;
        let currentUrl = this.props.match.url;
        return (
            <>
                <CardNav>
                    <CardNavLink currentUrl={currentUrl} to={`/teams/${teamId}`}>Home</CardNavLink>
                    <CardNavLink currentUrl={currentUrl} to={`/teams/${teamId}/scores`}>Scores</CardNavLink>
                    <CardNavLink currentUrl={currentUrl} to={`/teams/${teamId}/games`}>Schedule</CardNavLink>
                </CardNav>
                <PageTitle title={full_name}></PageTitle>
                
                <Switch>
                    <Route exact path='/teams/:id'>
                        <TeamHomePage team={this.props.team}></TeamHomePage>
                    </Route>
                    <Route exact path='/teams/:id/games'>
                        <TeamGames teamId={this.props.match.params.id}></TeamGames>
                    </Route>
                    <Route exact path='/teams/id/scores'>
                        <TeamScores></TeamScores>
                    </Route>
                </Switch>
            </>
    )
    }
}

const mapStateToProps = state => {
    return {
            team: state.TeamsStore.team,
        }

};

const mapDispatchToProps = dispatch => {
    return {
        fetchTeam: (id) => dispatch(fetchTeam(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);