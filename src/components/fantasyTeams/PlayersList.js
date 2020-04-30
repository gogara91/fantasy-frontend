import React, {useEffect, useState} from "react";
import PlayerListStyles from '../../css/PlayerListStyles.css';
import PlayerListItem from './PlayerListItem'
import {useSelector} from "react-redux";
import Pagination from "../partials/Pagination";
import {FantasyTeamsStore} from "../../redux/reducers/FantasyTeamsReducer";

export default (props) => {
    const players = useSelector(store => store.PlayersStore.playersWithTeam);
    const fantasyTeam = useSelector(store => store.FantasyTeamsStore.team);
    const [shownPlayers, setShownPlayers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 10;
    const offset = currentPage * perPage - perPage;

    useEffect(() => {
        setShownPlayers(players.slice(offset, perPage+offset));
    },[players, offset]);
    console.log(fantasyTeam.players);
    const list = !players ? '' :
        shownPlayers.map(player => {
            // check if fantasyTeam has that player in team
            const disabled = !!fantasyTeam.players.filter(
                fantasyPlayer => fantasyPlayer.player_id === player.id
            ).length;
            return <PlayerListItem
                key={player.id}
                player={player}
                disabled={disabled}
            />
        })

    const changeCurrentPage = (value) => {
        setCurrentPage(value)
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <div className="players-list-wrapper">
                        {list}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <Pagination
                        items={players}
                        offest={offset}
                        perPage={perPage}
                        currentPage={currentPage}
                        changePageNumber={(value) => changeCurrentPage(value)}
                    />
                </div>
            </div>
        </>
    )
}