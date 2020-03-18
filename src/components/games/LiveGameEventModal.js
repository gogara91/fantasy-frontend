import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import {Card} from "react-bootstrap";

export default (props) => {
    const modalHeader = props.player.player ? `${props.player.player.first_name} ${props.player.player.last_name}` : '';

    const [events, setEvents] = useState();

    const addToState = (data) => {
        console.log(data);
    }
    const statTypes = <>
        {props.statTypes.map(
            type => <option key={type.id} value={type.id}>{type.name}</option>)
        }
    </>
    return(
        <Modal show={props.showModal} size="xl">
            <Modal.Header>{modalHeader}</Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Stat:</label>
                            <select className="form-control">
                                {statTypes}
                            </select>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}