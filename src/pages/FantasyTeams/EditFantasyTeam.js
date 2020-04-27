import React, {Component} from "react";
import CourtImg from '../../images/bbcourt.jpg';
import {connect} from 'react-redux';
import {handleFetchFantasyTeam} from '../../redux/actions/fantasyTeamsActions';
import EditTeamStyles from '../../css/EditTeamStyles.css';
import {PlayerJersey} from "../../components/fantasyTeams/PlayerJersey";
class EditFantasyTeam extends Component {

    componentDidMount() {
        this.props.fetchTeam(this.props.match.params.id);
    }

    render() {

        return (
            <>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="court-overlay">
                                <img src={CourtImg} className="court-img" alt='bbal-court'/>
                                <div className="frontcourt-container">

                                    <PlayerJersey />
                                    <PlayerJersey />
                                </div>
                                <div className="midcourt-container">
                                    <PlayerJersey />
                                    <PlayerJersey />
                                </div>
                                <div className="backcourt-container">
                                    <PlayerJersey />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">

                        </div>
                    </div>
                </div>
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
        fetchTeam: (teamId) => dispatch(handleFetchFantasyTeam(teamId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFantasyTeam);