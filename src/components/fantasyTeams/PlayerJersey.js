import React from "react";
import jersey from '../../images/bbal-jersey.png';
import PlayerJerseyStyles from '../../css/PlayerJersey.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export const PlayerJersey = (props) => {
    return (
        <div className={"player-jersey " + props.className}>
            <div className="remove-player-bar">
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <img className="w-100 jersey-img" src={jersey} />
            <div className="jersey-overlay">
                <div className="player-name">
                    Nikolajevic
                </div>
                <div className="jersey-number">
                    88
                </div>
                <div className="player-info">
                    <div className="team-name font-weight-bold">ATL</div>
                    <div className="player-position font-weight-bold">C</div>
                </div>
            </div>
        </div>
    );
}