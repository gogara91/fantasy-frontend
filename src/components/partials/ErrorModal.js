import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Modal} from "react-bootstrap";
import {hideErrorModal, showErrorModal} from "../../redux/actions/errorActions";
import * as actionTypes from '../../redux/actions/actionTypes'
export default () => {
    let showModal = useSelector(state => state.ErrorStore.modalVisible);
    let title = useSelector(state => state.ErrorStore.title);
    let text = useSelector(state => state.ErrorStore.text);
    let type = useSelector(state => state.ErrorStore.type);
    const textType = `text-${type}`;

    const dispatch = useDispatch();

    const hideModalHandler = () => dispatch(hideErrorModal());

    return (
        <Modal show={showModal}>
            <Modal.Header>{title}</Modal.Header>
            <Modal.Body>
                <div className="col-md-12">
                    <p className={textType}>{text}</p>
                </div>
                <div className="col-md-12 text-right">
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={hideModalHandler}
                    >
                        Close
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    )
}