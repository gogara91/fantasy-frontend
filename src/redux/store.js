/**
 * Root reducer
 * Main redux store
 */
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {TeamsStore} from "./reducers/TeamsReducer";
import {PlayersStore} from "./reducers/PlayersReducer";
import {AuthStore} from './reducers/AuthReducer'
import {ErrorStore} from './reducers/ErrorReducer'
import {GamesStore} from './reducers/GamesReducer'
import {RoundsStore} from './reducers/RoundsReducer'
import {StatTypesStore} from './reducers/StatTypesReducer'
import {FantasyTeamsStore} from './reducers/FantasyTeamsReducer'
import {FantasyTeamPlayersSelectorStore} from "./reducers/FantasyTeamPlayersSelectorReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const combinedReducer = {
    TeamsStore,
    PlayersStore,
    AuthStore,
    ErrorStore,
    GamesStore,
    RoundsStore,
    StatTypesStore,
    FantasyTeamsStore,
    FantasyTeamPlayersSelectorStore
}
const store =  createStore(combineReducers(combinedReducer), composeEnhancers(applyMiddleware(thunk)));

export default store;