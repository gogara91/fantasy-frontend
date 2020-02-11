import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {TeamsStore} from "./reducers/TeamsReducer";
import {AuthStore} from './reducers/AuthReducer'
import {ErrorStore} from './reducers/ErrorReducer'
import {GamesStore} from './reducers/GamesReducer'
import {RoundsStore} from './reducers/RoundsReducer'
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const combinedReducer = {
    TeamsStore,
    AuthStore,
    ErrorStore,
    GamesStore,
    RoundsStore
}
const store =  createStore(combineReducers(combinedReducer), composeEnhancers(applyMiddleware(thunk)));

export default store;