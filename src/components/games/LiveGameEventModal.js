import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import GameEventsModalService from "../../services/GameEventsModalService";
export default (props) => {
    const EventsService = new GameEventsModalService(props.statTypes);
    const modalHeader = props.player.player ? `${props.player.player.first_name} ${props.player.player.last_name}` : '';

    const [events, setEvents] = useState();

    const addToState = (data) => {
        console.log(data);
    };

    const addStat = (statTypeData, playerData = {}) => {
        let data = {}
        if(!playerData.length) {
           data = {
               player_id: props.player.player_id,
               game_id: props.player.game_id,
               ...statTypeData,
           }
        } else {
            data = {
                ...statTypeData,
                ...playerData
            }
        }
        console.log(data);

    }

    const statChanged = (statId) => {
        const stat = getStat(statId)
        switch(stat.abbreviation) {
            case 'FTA':
                addStat(EventsService.setStat('FTA'));
                return;
            case 'FTM':
                addStat(EventsService.setStat('FTA'));
                addStat(EventsService.setStat('FTM'));
                addStat(EventsService.setPTS(1));
                return;
            case '2FGA':
                addStat(EventsService.setStat('2FGA'));
                return;
            case '2FGM':
                addStat(EventsService.setStat('2FGA'));
                addStat(EventsService.setStat('2FGM'));
                addStat(EventsService.setPTS(2));
                return;
            case '3FGA':
                addStat(EventsService.setStat('3FGA'));
                return;
            case '3FGM':
                addStat(EventsService.setStat('3FGA'));
                addStat(EventsService.setStat('3FGM'));
                addStat(EventsService.setPTS(3));
                return;
            case 'DREB':
                addStat(EventsService.setStat('DREB'));
                return;
            case 'OREB':
                addStat(EventsService.setStat('OREB'));
                return;
            case 'AST':
                addStat(EventsService.setStat('AST'));
                return;
            case 'STL':
                addStat(EventsService.setStat('STL'));
                return;
            case 'TO':
                addStat(EventsService.setStat('TO'));
                return;
            case 'BLK_FV':
                addStat(EventsService.setStat('BLK_FV'));
                return;
            case 'BLK_AG':
                addStat(EventsService.setStat('BLK_AG'));
                return;
            case 'PF_FV':
                addStat(EventsService.setStat('PF_FV'));
                return;
            case 'PF_RV':
                addStat(EventsService.setStat('PF_RV'));
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
    </>
    return(
        <Modal show={props.showModal} size="xl">
            <Modal.Header>{modalHeader}</Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Stat:</label>
                            <select className="form-control" onChange={e => statChanged(e.target.value)}>
                                {statTypes}
                            </select>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}