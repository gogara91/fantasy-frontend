import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {TeamsStore} from "./reducers/teamsReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const combinedReducer = {
    TeamsStore,
}
const store =  createStore(combineReducers(combinedReducer), composeEnhancers(applyMiddleware(thunk)));

export default store;