import React, { useEffect } from 'react';
import GameRow from '../games/GameRow'
import {useSelector, useDispatch} from "react-redux";
import {fetchTeamGames} from "../../redux/actions/teamsActions";

export default (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTeamGames(props.teamId))
    },[]);

    let games = useSelector(state => state.TeamsStore.teamGames)
    let gamesList = [];
    if(games) {
        gamesList = games.map(game => {
                return <GameRow key={game.id} game={game}></GameRow>
            }
        );
    }
    return (
        <div>

            <h3>Games</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Round</th>
                        <th>Home team</th>
                        <th>Away team</th>
                        <th>Score</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {gamesList}
                </tbody>
            </table>
        </div>
    )
}