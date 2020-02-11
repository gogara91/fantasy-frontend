import * as actionTypes from '../actions/actionTypes'

const initialState = {
    title: '',
    text: '',
    type: '',
    modalVisible: false
};

export const ErrorStore = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_ERROR:
            return {
                ...state,
                title: action.payload.title,
                text: action.payload.text,
                type: action.payload.type,
                modalVisible: true
            };
        case actionTypes.REMOVE_ERROR:
            return {
                ...state,
                errorTitle: '',
                errorText: '',
                errorType: '',
                modalVisible: false
            };
        default:
            return state
    }
};