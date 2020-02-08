import React from 'react';
import GameRow from '../games/GameRow'
export default (props) => {
    let games = [];
    if(props.games) {
        games = props.games.map(game => {
                return <GameRow key={game.id} game={game}></GameRow>
            }
        );
    }
    return (
        <div>
            {games}
        </div>
    )
}