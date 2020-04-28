import React, {Component} from "react";
import CourtImg from '../../images/bbcourt.jpg';
import {connect} from 'react-redux';
import {handleFetchFantasyTeam} from '../../redux/actions/fantasyTeamsActions';
import EditTeamStyles from '../../css/EditTeamStyles.css';
import {PlayerJersey} from "../../components/fantasyTeams/PlayerJersey";
import PlayersList from '../../components/fantasyTeams/PlayersListSelector'
class EditFantasyTeam extends Component {

    componentDidMount() {
        this.props.fetchTeam(this.props.match.params.id);
    }

    render() {
        const {players} = this.props.team;
        const center = players ? players.filter(player => player.current_position === 'C')[0] : '';
        return (
            <>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="court-overlay">
                                <img src={CourtImg} className="court-img" alt='bbal-court'/>
                                <div className="frontcourt-container">
                                    <PlayerJersey playerInfo={center} />
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
                        <div className="col-md-5">
                            <PlayersList></PlayersList>
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