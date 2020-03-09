import React, {useState} from 'react';
import LiveGameEventModal from "./LiveGameEventModal";

export default (props) => {
    let [showModal, switchModal] = useState(false);
    let [player, setPlayer] = useState(false);
    const openModal = (id) => {
        switchModal(!showModal);
        setPlayer(props.lineup.filter(player => player.player_id === id)[0]);
    };

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
                                onClick={() => openModal(player.player_id)}
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
        <LiveGameEventModal
            showModal={showModal}
            player={player}
            gameId={props.gameId}
        />
    </div>
    );

    return (
        <>
            {props.team ? panel : 'Loading...'}
        </>
    )
}