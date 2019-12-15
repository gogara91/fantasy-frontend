import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTeam } from "../redux/actions/teamsActions";
import PageTitle from "../components/partials/PageTitle";
class Team extends Component {

    componentDidMount() {
        this.props.fetchTeam(this.props.match.params.id);
    }

    render() {
        let {id, abbreviation, city, conference, division, full_name, name} = this.props.team;
        return (
            <>
                <PageTitle title={full_name}></PageTitle>
            </>
        )
    }
}

const mapStateToProps = state => {
    return(
        {team: state.TeamsStore.team}
        )
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTeam: (id) => dispatch(fetchTeam(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Team);