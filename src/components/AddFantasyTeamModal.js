import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import PrimaryButton from "./pageBuilder/PrimaryButton";
import FormGroup from "./pageBuilder/FormGroup";
import {useDispatch, useSelector} from "react-redux";
import FantasyTeamsService from "../services/FantasyTeamsService";
import {showErrorModal} from "../redux/actions/errorActions";
import * as actionTypes from "../redux/actions/actionTypes";
export default (props) => {

    const [teamName, setTeamName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTeamName(e.target.value)
    }
    const user = useSelector(state => state.AuthStore.user);
    const createTeam = async () => {
        try {
            const {data} = await FantasyTeamsService.create({
                team_name: teamName,
                user_id: user.id
            });
        } catch (e) {
            console.log(e);
            dispatch(showErrorModal({
                title: 'Error!',
                text: e,
                type: actionTypes.ERROR_DANGER
            }))
        }

    }

    return (
        <Modal show={props.showModal}>
            <Modal.Header>Hey close</Modal.Header>
            <Modal.Body>
                <FormGroup
                    label='Choose team name:'
                    input={{
                        name: 'team_name',
                        type: 'text',
                        placeholder: 'E.g. Superheroes from Salas',
                        value: teamName
                    }}
                    onInputChange={(e)=> handleChange(e)}
                >

                </FormGroup>
                <div className="row">
                    <div className="col-md-12 text-right">
                        <PrimaryButton
                            onClick={() => props.hideModal()}
                            color='danger'
                        >
                            Close
                        </PrimaryButton>
                        <PrimaryButton
                            onClick={() => createTeam()}
                            className={'ml-1'}
                        >
                            Create
                        </PrimaryButton>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}