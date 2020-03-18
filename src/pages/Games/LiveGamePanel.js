import React, {useEffect, useState} from 'react';
import PageTitle from "../../components/partials/PageTitle";
import {useSelector, useDispatch} from "react-redux";
import {fetchLiveGame} from "../../redux/actions/gamesActions";
import {fetchStatTypes} from "../../redux/actions/statTypesActions";
import LiveGameTeamPanel from '../../components/games/LiveGameTeamPanel'
import LiveGameEventModal from "../../components/games/LiveGameEventModal";
export default (props) => {
    const dispatch = useDispatch();
    let [player, setPlayer] = useState(false);
    let [showModal, switchModal] = useState(false);
    const statTypes = useSelector(state => state.StatTypesStore.statTypes);

    useEffect(() => {
        dispatch(fetchLiveGame(props.match.params.id))
    },[]);

    useEffect(() => {
        dispatch(fetchStatTypes())
    },[]);

    const openModal = (player) => {
        switchModal(!showModal);
        setPlayer(player);
    };

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
                        openModal={openModal}
                    />
                </div>
                <div className="col-md-6">
                    <LiveGameTeamPanel
                        team={game.away_team}
                        lineup={game.away_team_lineup}
                        gameId={game.id}
                        openModal={openModal}
                    />
                </div>
                <LiveGameEventModal
                    showModal={showModal}
                    player={player}
                    gameId={props.gameId}
                    statTypes={statTypes}
                />
            </div>
        </>
    )
}