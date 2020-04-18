import React, {useEffect, useState} from 'react';
import PageTitle from "../../components/partials/PageTitle";
import {useSelector, useDispatch} from "react-redux";
import {fetchLiveGame} from "../../redux/actions/gamesActions";
import {fetchStatTypes} from "../../redux/actions/statTypesActions";
import LiveGameTeamPanel from '../../components/games/LiveGameTeamPanel'
import LiveGameEventModal from "../../components/games/LiveGameEventModal";
import ScorePanel from "../../components/games/ScorePanel";
import BoxScore from '../../components/games/BoxScore';
import {Tab, Tabs} from "react-bootstrap";

export default (props) => {
    const dispatch = useDispatch();
    const [player, setPlayer] = useState(false);
    const [opposingPlayers, setOpposingPlayers] = useState(false);
    const [showModal, switchModal] = useState(false);
    const game = useSelector(state => state.GamesStore.liveGame);
    const statTypes = useSelector(state => state.StatTypesStore.statTypes);
    // const gameEvents = useSelector(state => state.GamesStore.gameEvents);
    useEffect(() => {
        dispatch(fetchLiveGame(props.match.params.id))
    },[]);

    useEffect(() => {
        dispatch(fetchStatTypes())
    },[]);

    const openModal = (player) => {
        switchModal(!showModal);
        setPlayer(player);
        if(player.team_id == game.home_team_id) {
            setOpposingPlayers(game.away_team_lineup);
            return;
        }
        setOpposingPlayers(game.home_team_lineup);
    };
    const closeModal = () => {
        switchModal(false);
    }

    const title = game.home_team ? `${game.home_team.full_name} - ${game.away_team.full_name}` : 'Loading game...';
    const subtitle = game.home_team ? game.home_team.city : '';
    return(
        <>
            <PageTitle title={title} subtitle={subtitle} />
            <div className="row mb-3">
                <div className="col-md-12 text-center">
                    <ScorePanel />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                        <Tab eventKey="home" title="Home">
                            <BoxScore game={game} team_id={game.home_team_id} />
                        </Tab>
                        <Tab eventKey="away" title="Away">
                            <BoxScore game={game} team_id={game.away_team_id} />
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <LiveGameTeamPanel
                        team={game.home_team}
                        lineup={game.home_team_lineup}
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
                    closeModal={closeModal}
                    player={player}
                    opposingPlayers={opposingPlayers}
                    gameId={props.gameId}
                    statTypes={statTypes}
                />
            </div>
        </>
    )
}