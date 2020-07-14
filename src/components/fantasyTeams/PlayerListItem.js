import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {handleAddPlayerToFantasyTeam} from "../../redux/actions/fantasyTeamsActions";
import { useParams } from 'react-router-dom'
import PlayerInfoNugget from "./PlayerInfoNugget";

export default(props) => {
    const dispatch = useDispatch();
    const {first_name, last_name, team, position, fantasy_cost, id} = props.player;
    const fantasyTeamId = useParams().id;
    const fantasyTeamPlayers = useSelector(state => state.FantasyTeamsStore.team.players);
    const alreadySelectedPositions = fantasyTeamPlayers.map(player => player.current_position);

    const addToFantasyTeam = () => {
        if(alreadySelectedPositions.includes(position)) {
            if(!window.confirm('You already have player at this position in lineup. Do you want to add to bench?')) {
                return;
            }
        }
        dispatch(handleAddPlayerToFantasyTeam(id, fantasyTeamId))
    }

    return (
        <div className="player-list-item">
            <PlayerInfoNugget teamAbbreviation={team[0].abbreviation} position={position}/>
            <div className="player-list-info-wrapper">
                <div className="player-list-name">
                    <b>{last_name.toUpperCase()}</b> {first_name.toUpperCase()}
                </div>
                <div className="player-list-info">
                    <span className="team">@ {team[0].abbreviation}</span>
                    <span className="average-points">- 5.65 pt</span>
                    <span className="popularity">0,2%</span>
                </div>
            </div>
            <div className="add-player-btn-wrapper">
                <button
                    className="add-player-btn"
                    disabled={props.disabled}
                    onClick={() => addToFantasyTeam()}
                >
                    {fantasy_cost} cr
                    <FontAwesomeIcon className="icon" icon={faPlus} />
                </button>
            </div>
        </div>
    )
}