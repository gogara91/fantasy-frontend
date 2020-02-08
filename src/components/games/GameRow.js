import React from "react";

export default (props) => {
    return (
        <div className='row'>
            <div>{props.game.round.number}. {props.game.home_team.full_name} - {props.game.away_team.full_name}</div>
        </div>
    )
}