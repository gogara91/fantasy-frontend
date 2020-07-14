import React from "react";
import jersey from '../../images/bbal-jersey.png';
import  '../../css/PlayerJersey.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export const PlayerJersey = (props) => {
    const {player} = props.playerInfo ? props.playerInfo : false;

    return (
        <div

            className={"player-jersey " + props.className}
            draggable={player ? true : false}
            onDragStart={() => props.setDraggedPlayer(player.id)}
            onDragEnter={() => props.setToBeDroppedOn(player ? player.id : '')}
            onDragOver={(e) => {
                e.stopPropagation();
                e.preventDefault();
            }}
            onDrop={() => props.replacePlayers()}
        >
            <div className="remove-player-bar">
                {player ? <FontAwesomeIcon
                    icon={faTimes}
                    onClick={() => props.removePlayer(player.id)}
                /> : ''}
            </div>
            <img className="w-100 jersey-img" src={jersey} />
            <div
                className="jersey-overlay"
                onClick={() => props.onClick(player)}
            >
                <div className="player-name">
                    {player ? `${player.first_name.charAt(0)}. ${player.last_name}`: ''}

                </div>
                <div className="jersey-number">
                    {player ? player.team[0].pivot.jersey_number : ''}
                </div>
                <div className="player-info">
                    <div className="team-name font-weight-bold">
                        {player ? player.team[0].abbreviation : '+'}
                    </div>
                    <div className="player-position font-weight-bold">{props.position}</div>
                </div>
            </div>
        </div>
    );
}