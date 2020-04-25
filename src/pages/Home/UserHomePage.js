import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import CreateTeamStyles from '../../css/CreateTeamButton.css'
import AddFantasyTeamModal from "../../components/CreateFantasyTeamModal";
export default class UserHomePage extends Component {
    state =  {
        showModal: false
    }
    openCreateTeamModal() {
        this.setState({...this.state, showModal: true})
    }
    hideModal() {
        this.setState({...this.state, showModal: false})
    }
    render() {
        let addTeamButtons = [];
        for(let i = 0; i < 3; i++) {
            addTeamButtons[i] = (
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