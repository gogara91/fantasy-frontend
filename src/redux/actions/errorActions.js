import * as actionTypes from "./actionTypes";

const hideErrorModalDispatcher = () => {
    return {
        type: actionTypes.REMOVE_ERROR
    }
};

export const hideErrorModal = () => {
    return (dispatch) => {
        dispatch(hideErrorModalDispatcher());
    }
};

const showErrorModalDispatcher = (data) => {
    return {
        type: actionTypes.SET_ERROR,
        payload: data
    }
};

export const showErrorModal = (data) => {
    return (dispatch) => {
        dispatch(showErrorModalDispatcher(data))
    }
}