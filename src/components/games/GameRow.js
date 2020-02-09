import React from "react";
import Moment from "react-moment";
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
        </tr>
    )
}