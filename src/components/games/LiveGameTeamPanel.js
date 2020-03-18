import React, {useState} from 'react';

export default (props) => {
    const getPlayer = (playerId) => {
        return props.lineup.filter(player => player.player_id === playerId)[0]
    }
    const players = (
        !props.lineup ? '' :
            <>
                {props.lineup.map(player => {
                    const boldIfStarted = player.starter ? 'font-weight-bold' : '';
                    return (
                    <tr key={player.id}>
                        <td className={boldIfStarted}>
                            { player.player.first_name } { player.player.last_name }
                        </td>
                        <td className="text-center">
                            <button
                                className="btn btn-sm btn-primary"
                                onClick={() => props.openModal(getPlayer(player.player_id))}
                            >
                                <span>+</span>
                            </button>
                        </td>
                    </tr>
                    )}
                )}
            </>
    );

    const panel = (
    !props.team ? '' :
    <div className="card">
        <div className="card-header">
            {props.team.full_name}
        </div>
        <div className="card-body">
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Player</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {players}
                </tbody>
            </table>
        </div>
    </div>
    );

    return (
        <>
            {props.team ? panel : 'Loading...'}
        </>
    )
}