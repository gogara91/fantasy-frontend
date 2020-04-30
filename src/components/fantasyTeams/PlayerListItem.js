import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export default(props) => {
    const {first_name, last_name, team, position} = props.player;
    return (
        <div className="player-list-item">
            <div className="team-position-nugget-wrapper">
                <div className="nugget">
                    <div className="nugget-up">
                        {team[0].abbreviation}
                    </div>
                    <div className="nugget-down">
                        {position}
                    </div>
                </div>
            </div>
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
                >
                    24.17 cr
                    <FontAwesomeIcon className="icon" icon={faPlus} />
                </button>
            </div>

        </div>
    )
}