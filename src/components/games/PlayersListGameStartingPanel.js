import React from 'react';

export default (props) => {
    const players = props.players.map(player => {
        let isStarter = props.starters.includes(player.id);
        let isLineup = props.lineup.includes(player.id);

        const handleLineupChange = (playerId) => {
            props.pushToLineup(playerId);
        };
        const handleStarterChange = (playerId) => {
            props.pushToStarters(playerId);
        };
        return (
            <tr key={player.id}>
                <td>{player.first_name} {player.last_name}</td>
                <td>{player.position}</td>
                <td>{player.height}</td>
                <td className="text-center" onClick={()=> handleLineupChange(player.id)}>
                    <input
                        type="checkbox"
                        checked={isLineup}
                        onChange={()=> handleLineupChange(player.id)}
                    ></input>
                </td>
                <td className="text-center" onClick={()=> handleStarterChange(player.id)}>
                    <input
                        type="checkbox"
                        checked={isStarter}
                        onChange={()=> handleStarterChange(player.id)}
                    ></input>
                </td>
            </tr>
        )
    });

    return (
        <>
            {players}
        </>
    )
}