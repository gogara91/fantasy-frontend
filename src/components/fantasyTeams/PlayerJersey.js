import React from "react";
import jersey from '../../images/bbal-jersey.png';
import PlayerJerseyStyles from '../../css/PlayerJersey.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export const PlayerJersey = (props) => {
    const {player} = props.playerInfo ? props.playerInfo : false;
    return (
        <div className={"player-jersey " + props.className}>
            <div className="remove-player-bar">
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <img className="w-100 jersey-img" src={jersey} />
            <div className="jersey-overlay">
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
                    <div className="player-position font-weight-bold">C</div>
                </div>
            </div>
        </div>
    );
}