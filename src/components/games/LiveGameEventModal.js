import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Modal} from "react-bootstrap";
import GameEventsService from "../../services/GameEventsService";
import {OpposingTeamSuboption} from "../../pages/Games/OpposingTeamSuboption";
import {showErrorModal} from "../../redux/actions/errorActions";
import * as actionTypes from "../../redux/actions/actionTypes";
import {addGameStats} from '../../redux/actions/gamesActions'

export default (props) => {
    const dispatch = useDispatch();
    const EventsService = new GameEventsService(props.statTypes);
    const modalHeader = props.player.player ? `${props.player.player.first_name} ${props.player.player.last_name}` : '';
    const [events, setEvents] = useState();
    const [selectedStat, setSelectedStat] = useState();
    const [selectedOpposingPlayer, changeSelectedOpposingPlayer] = useState(false);
    const [stealSubOptions, setStealSubOptions] = useState(false);

    // Controls what happens when select dropdown has changed
    // in some cases its required to select opposing team player, for example for steals, blocks
    const statChanged = (statId) => {
        setStealSubOptions(false);
        const stat = getStat(statId);
        switch(stat.abbreviation) {
            case 'STL':
                setStealSubOptions(true);
                break;
        }
        setSelectedStat(getStat(statId));
    };

    // Calls saveStats from GameEventsService, which sends HTTP request.
    const addSelectedStat = (payload = false) => {
        let data = payload;
        if(!payload) {
            data = {
                game_id: props.player.game_id,
                player_id: props.player.player_id,
                stat_type: selectedStat,
            }
        }
        return EventsService.saveStats(data);
    }

    // If we selected steal, we get to select opposing team player from which ball was stolen
    // this sends additional request for it.
    const addTurnoverFromSuboption = () => {
        return addSelectedStat({
            game_id: props.player.game_id,
            player_id: selectedOpposingPlayer,
            stat_type: {abbreviation: 'TO'},
        });
    }

    // this is passed as prop to suboption dropdown
    const changeOpposingPlayer = (e) => {
        // saves the id of the player
        changeSelectedOpposingPlayer(e.target.value);
    }

    // Triggers action on click of "Save" button
    const saveStats = async () => {
        if(!selectedStat) {
            dispatch(showErrorModal({
                title: 'Error!',
                text: 'Please select stat.',
                type: actionTypes.ERROR_DANGER
            }));
            return;
        }

        try {
            // check if steal is selected as stat. If its steal,
            // you have to select who is the ball stolen from.
            if(selectedStat.abbreviation === 'STL') {
                const responseTO = await addTurnoverFromSuboption();
                dispatch(addGameStats(responseTO.data));
            }
            const response = await addSelectedStat();
            dispatch(addGameStats(response.data));
            closeModal();
        } catch(error) {
            dispatch(showErrorModal({
                title: 'Error!',
                text: 'There\'s an error on the server. Try again!',
                type: actionTypes.ERROR_DANGER
            }));
            return;
        }
    };

    const getStat = (statId) => {
        return props.statTypes.filter(type => type.id == statId)[0];
    };

    const statTypes = <>
        {props.statTypes.map(
            // if minutes skip this because minutes aren't added by hand
            // can't add FGA, FGA, FGM, FTM, 2FGM, 3FGM
            type =>
                type.abbreviation === 'PTS' ||
                type.abbreviation === 'MIN' ||
                type.abbreviation === 'FGA' ||
                type.abbreviation === 'FGM' ?
                '' : <option key={type.id} value={type.id}>{type.name}</option>
        )}
    </>;
    const closeModal = () => {
        setStealSubOptions(false);
        setSelectedStat();
        props.closeModal();
    };

    return(
        <Modal show={props.showModal} size="xl">
            <Modal.Header>{modalHeader}</Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Stat:</label>
                            <select
                                className="form-control"
                                onChange={e => statChanged(e.target.value)}
                                value={selectedStat ? selectedStat.id : selectedStat}
                                defaultValue='default'
                            >
                                <option disabled={true} value='default'>Select stat...</option>
                                {statTypes}
                            </select>
                        </div>
                    </div>
                </div>
                {stealSubOptions ? <OpposingTeamSuboption
                    selectedPlayer={selectedOpposingPlayer}
                    changeSelectedPlayer={changeOpposingPlayer}
                    opposingPlayers={props.opposingPlayers} /> : ''
                }
                <div className="row">
                    <div className="col-md-12 text-right">
                        <button onClick={() => closeModal()}
                            className="btn btn-sm mr-2 btn-danger"
                        >Cancel</button>
                        <button onClick={saveStats}
                            className="btn btn-sm btn-success"
                        >Save stats</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}