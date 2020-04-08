import React from "react";
import Moment from "react-moment";
import {Link} from "react-router-dom";

export default (props) => {

    return (
        <tr>
            <td>{props.game.round.number}</td>
            <td>{props.game.home_team.full_name}</td>
            <td>{props.game.away_team.full_name}</td>
            <td className="text-center"> -- : -- </td>
            <td  className="text-center">
                <Moment format="DD/MM/YYYY">{props.game.time}</Moment>
            </td>
            {
            props.startGameButton ?
            <td className="text-center">
                {props.game.game_status === 1 ?
                <Link
                    className="btn btn-sm btn-outline-primary"
                    to={`/games/${props.game.id}/start-game`}
                >
                    Begin game
                </Link> :
                <Link to={`/games/live-game-panel/${props.game.id}`}>Enter game panel</Link>}
            </td>: ''
            }
        </tr>
    )
}