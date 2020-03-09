import React from "react";
import {Modal} from "react-bootstrap";

export default (props) => {
    console.log(props.player);
    console.log(props.gameId);
    const modalHeader = props.player.player ? `${props.player.player.first_name} ${props.player.player.last_name}` : '';
    return(
        <Modal show={props.showModal} size="xl">
            <Modal.Header>{modalHeader}</Modal.Header>
            <Modal.Body>

            </Modal.Body>
        </Modal>
    )
}