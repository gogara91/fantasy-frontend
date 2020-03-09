import React, {useEffect} from 'react';
import PageTitle from "../../components/partials/PageTitle";
import { useSelector, useDispatch } from "react-redux";
import {fetchLiveGame} from "../../redux/actions/gamesActions";
import LiveGameTeamPanel from '../../components/games/LiveGameTeamPanel'
export default (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLiveGame(props.match.params.id))
    },[]);

    const game = useSelector(state => state.GamesStore.liveGame);
    const title = game.home_team ? `${game.home_team.full_name} - ${game.away_team.full_name}` : 'Loading game...';
    const subtitle = game.home_team ? game.home_team.city : '';

    return(
        <>
            <PageTitle title={title} subtitle={subtitle} />
            <div className="row">
                <div className="col-md-6">
                    <LiveGameTeamPanel
                        team={game.home_team}
                        lineup={game.home_team_lineup}
                        gameId={game.id}
                    />
                </div>
                <div className="col-md-6">
                    <LiveGameTeamPanel
                        team={game.away_team}
                        lineup={game.away_team_lineup}
                        gameId={game.id}
                    />
                </div>
            </div>
        </>
    )
}