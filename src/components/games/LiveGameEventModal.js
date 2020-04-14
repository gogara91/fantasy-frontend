import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Modal} from "react-bootstrap";
import GameEventsService from "../../services/GameEventsService";
import {StolenFromSubOption} from "../../pages/Games/StolenFromSubOption";
import {showErrorModal} from "../../redux/actions/errorActions";
import * as actionTypes from "../../redux/actions/actionTypes";

export default (props) => {
    const dispatch = useDispatch();
    const EventsService = new GameEventsService(props.statTypes);
    const modalHeader = props.player.player ? `${props.player.player.first_name} ${props.player.player.last_name}` : '';
    const [events, setEvents] = useState();
    const [selectedStat, setSelectedStat] = useState();
    const [stealSubOptions, setStealSubOptions] = useState(false);

    const statChanged = (statId) => {
        setStealSubOptions(false);
        const stat = getStat(statId);
        switch(stat.abbreviation) {
            case 'STL':
                setStealSubOptions(true);
                return;
        }
        setSelectedStat(getStat(statId));
    };

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
            const {data} = await EventsService.saveStats({
                game_id: props.player.game_id,
                player_id: props.player.id,
                stat_type: selectedStat,
            });
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
                {stealSubOptions ? <StolenFromSubOption opposingPlayers={props.opposingPlayers} /> : ''}
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