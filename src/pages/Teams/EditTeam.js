import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchTeam, updateTeam, saveTeam } from "../../redux/actions/teamsActions";
import FormGroup from "../../components/pageBuilder/FormGroup";
import PrimaryButton from "../../components/pageBuilder/PrimaryButton";
class EditTeam extends Component {

    componentDidMount() {
        this.props.fetchTeam(this.props.match.params.id)
    }

    handleInputChange = (e) => {
        try {
            this.props.updateTeam(
                this.props.match.params.id,
                {
                    [e.target.name]: e.target.value
                }
            );
        } catch(error) {
            console.log(error);
        }

    };

    handleClick = () => {
        try {
            this.props.saveTeam(this.props.match.params.id, this.props.team);
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        const  {id, abbreviation, city, conference, division, full_name, name } = this.props.team;
        return (
            <>
                <div className='row'>
                    <div className='col-md-6'>
                        <FormGroup
                            label='Full Name'
                            input={{ name: 'full_name', value: full_name, type: 'text'}}
                            onInputChange={(e)=> this.handleInputChange(e)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <FormGroup
                            label='Name'
                            input={{ name: 'name', value: name, type: 'text'}}
                            onInputChange={(e)=> this.handleInputChange(e)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <FormGroup
                            label='Abbreviation'
                            input={{ name: 'abbreviation', value: abbreviation, type: 'text'}}
                            onInputChange={(e)=> this.handleInputChange(e)}
                        />
                    </div>
                    <div className='col-md-6'>
                        <FormGroup
                            label='City'
                            input={{ name: 'city', value: city, type: 'text'}}
                            onInputChange={(e)=> this.handleInputChange(e)}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-right'>
                        <PrimaryButton onClick={(e)=> this.handleClick(e)}>
                            Save
                        </PrimaryButton>
                    </div>
                </div>
            </>

        )
    }
}
const mapStateToProps = state => {
    return {
        team: state.TeamsStore.team
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTeam: (teamId) => dispatch(fetchTeam(teamId)),
        updateTeam: (teamId, payload) => dispatch(updateTeam(teamId, payload)),
        saveTeam: (teamId, payload) => dispatch(saveTeam(teamId, payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTeam);