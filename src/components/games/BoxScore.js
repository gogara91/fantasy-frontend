import React from "react";
import styles from '../../css/BoxScore.css';
import BoxScoreRow from './BoxScoreRow';
import {useSelector} from "react-redux";
import {StatTypesStore} from "../../redux/reducers/StatTypesReducer";

export default (props) => {
    const lineup = props.game.home_team_id === props.team_id ?
        props.game.home_team_lineup : props.game.away_team_lineup;
    const events = props.game.game_events ? props.game.game_events : '';
    const playerTotals = [];
    const statTypes = useSelector(state => state.StatTypesStore.statTypes)
    const boxScoreRow = lineup ? lineup.map(lineup => {
        const stats = statTypes.map(type => {
            return {
                stat_type_id: type.id,
                stat_type_abbreviation: type.abbreviation,
                value: 0
            }
        })
        playerTotals.push({
            name: `${lineup.player.first_name} ${lineup.player.last_name}`,
            id: lineup.player_id,
            stats: [...stats]
        })

        events.map(event => {
            if(lineup.player_id === event.player_id) {
                const player = playerTotals.filter(player => player.id === event.player_id)[0];
                const stats = player.stats.map(stat => {
                    return {
                        stat_type_id: stat.stat_type_id,
                        stat_type_abbreviation: stat.stat_type_abbreviation,
                        value: stat.stat_type_id === event.stat_type_id ?
                            parseInt(stat.value) + parseInt(event.value) : parseInt(stat.value)
                    }
                });
                player.stats = [...stats];
            }
        })
    }) : '';
    const boxScoreRows = playerTotals.map(player => {
        return <BoxScoreRow key={player.id} player={player} />
    })
    return (
        <>
        <table className="table table-bordered table-striped table-condensed text-center">
            <thead>
            <tr className="text-center">
                <th rowSpan={2}></th>
                <th rowSpan={2}>MIN</th>
                <th rowSpan={2}>PTS</th>
                <th rowSpan={2}>FGA</th>
                <th rowSpan={2}>FGM</th>
                <th rowSpan={2}>FG%</th>
                <th rowSpan={2}>FTA</th>
                <th rowSpan={2}>FTM</th>
                <th rowSpan={2}>FT%</th>
                <th rowSpan={2}>2FGA</th>
                <th rowSpan={2}>2FGM</th>
                <th rowSpan={2}>2FG%</th>
                <th rowSpan={2}>3FGA</th>
                <th rowSpan={2}>3FGM</th>
                <th rowSpan={2}>3FG%</th>
                <th rowSpan={2}>TREB</th>
                <th rowSpan={2}>DREB</th>
                <th rowSpan={2}>OREB</th>
                <th rowSpan={2}>AST</th>
                <th rowSpan={2}>STL</th>
                <th rowSpan={2}>TO</th>
                <th colSpan={2}>BLK</th>
                <th colSpan={2}>PF</th>
            </tr>
            <tr>
                <th>FV</th>
                <th>AG</th>
                <th>FV</th>
                <th>RV</th>
            </tr>
            </thead>
            <tbody>
                {boxScoreRows}
            </tbody>
        </table>
        </>
    )
}