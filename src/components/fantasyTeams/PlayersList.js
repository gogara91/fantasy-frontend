import React, {useEffect, useState} from "react";
import PlayerListStyles from '../../css/PlayerListStyles.css';
import PlayerListItem from './PlayerListItem'
import {useSelector} from "react-redux";
export default (props) => {
    const players = useSelector(store => store.PlayersStore.playersWithTeam);
    const [currentPage, setCurrentPage] = useState(1);
    const [shownPlayers, setShownPlayers] = useState([]);
    const perPage = 10;
    const totalPages = Math.ceil(players.length / 10);
    const offset = currentPage * perPage - perPage;

    useEffect(() => {
        setShownPlayers(players.slice(offset, perPage+offset));
    },[players])

    const list = !players ? '' :
        shownPlayers.map(player => <PlayerListItem key={player.id} player={player} />)

    const pagination = [];
    for(let i = 1; i <= totalPages; i++) {

        pagination.push(
            <span key={i} className="page-item">
                <span className="page-link">
                {i}
                </span>
            </span>
        );
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
                    <div className="pagination">
                        <span className="page-item">
                            <span className="page-link">
                                {'<'}
                            </span>
                        </span>
                        {pagination}
                        <span className="page-item">
                            <span className="page-link">
                                {'>'}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}