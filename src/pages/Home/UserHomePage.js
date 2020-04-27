import React, {Component} from "react";
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import CreateTeamStyles from '../../css/CreateTeamButton.css'
import AddFantasyTeamModal from "../../components/CreateFantasyTeamModal";
import {FetchFantasyTeamsForUser} from "../../redux/actions/fantasyTeamsActions";
import {Link} from "react-router-dom";

class UserHomePage extends Component {
    state =  {
        showModal: false
    }
    openCreateTeamModal() {
        this.setState({...this.state, showModal: true})
    }
    hideModal() {
        this.setState({...this.state, showModal: false})
    }

    componentDidMount() {
        this.props.fetchFantasyTeams(this.props.userId)
    }

    render() {
        let addTeamButtons = [];
        for(let i = 0; i < 3; i++) {
            addTeamButtons[i] = (
                this.props.fantasyTeams[i] ?
                    <div key={i} className="col-md-4">
                        <div className="manage-team-btn">
                            <p>{this.props.fantasyTeams[i].team_name}</p>
                            <p>
                                <span>
                                    <Link
                                        to={`/fantasy-teams/${this.props.fantasyTeams[i].id}/edit`}
                                    >
                                        MANAGE TEAM
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                    :
                    <div key={i} className="col-md-4">
                        <button
                            className="create-team-btn"
                            onClick={()=> this.openCreateTeamModal()}
                        >
                            <p>
                                <FontAwesomeIcon icon={faPlus} className="plus"/>
                            </p>
                            <p>CREATE TEAM</p>
                        </button>
                    </div>
            );
        }
        return (
            <section className="container pt-3">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Welcome to Fantasy Basketball Application</h1>
                        <h3>Click on "create team" below to start.</h3>
                    </div>
                </div>
                <div className="row">
                    {addTeamButtons}
                </div>
                {<AddFantasyTeamModal
                    hideModal={() => this.hideModal()}
                    showModal={this.state.showModal}
                />}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.AuthStore.user.id,
        fantasyTeams: state.FantasyTeamsStore.user_teams,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFantasyTeams: (userId) => dispatch(FetchFantasyTeamsForUser(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHomePage);