import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchTeam, updateTeam } from "../../redux/actions/teamsActions";
import FormGroup from "../../components/pageBuilder/FormGroup";
class EditTeam extends Component {

    componentDidMount() {
        this.props.fetchTeam(this.props.match.params.id)
    }
    handleInputChange = (e) => {
        console.log(e.target.value)

    };

    render() {
        const  {id, abbreviation, city, conference, division, full_name, name } = this.props.team;
        return (
            <>
                <FormGroup name='name' label='Label' input={{ value: name, type: 'text'}} onInputChange={(e)=> this.handleInputChange(e)}/>
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
        updateTeam: (teamId) => dispatch(updateTeam(teamId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTeam);