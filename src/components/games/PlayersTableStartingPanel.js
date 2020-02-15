import React from 'react';
import PlayersListGameStartingPanel from "./PlayersListGameStartingPanel";

export default (props) => {
    const team = props.team;
    const teamPlayers = <PlayersListGameStartingPanel
        players={team.players}
        starters={props.starters}
        lineup={props.lineup}
        pushToStarters={(id)=> props.pushToStarters(id)}
        pushToLineup={(id)=> props.pushToLineup(id)}
    />;

    return (
        <table className="table table-striped table-bordered">
            <thead>
            <tr>
                <th colSpan={5}>
                    {team.full_name}
                </th>
            </tr>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Height</th>
                <th>Playing</th>
                <th>Starter</th>
            </tr>
            </thead>
            <tbody>
            {teamPlayers}
            </tbody>
        </table>
    )
}