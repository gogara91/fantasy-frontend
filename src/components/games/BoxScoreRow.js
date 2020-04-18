import React from 'react';

export default (props) => {
    const {name, id, stats} = props.player;
    const getValueFromArray = (abbreviation) => {
        const stat = stats.filter(stat => stat.stat_type_abbreviation === abbreviation)[0];
        return stat ? stat.value : 0;
    }

    const calculatePercentage = (attempted,made) => {
        if(attempted === 0) {
            return '0,00'
        }
        const percentage = made / attempted * 100;
        return percentage.toLocaleString('sr', {minimumFractionDigits: 2});
    }

    const FGPER = calculatePercentage(
            getValueFromArray('FGA'),
            getValueFromArray('FGM')
        );

    const FTPER = calculatePercentage(
            getValueFromArray('FTA'),
            getValueFromArray('FTM')
        );

    const FG2PER = calculatePercentage(
            getValueFromArray('2FGA'),
            getValueFromArray('2FGM')
        );

    const FG3PER = calculatePercentage(
            getValueFromArray('3FGA'),
            getValueFromArray('3FGM')
        );

    return (
        <tr>
            <td>{name}</td>
            <td>
                {getValueFromArray('MIN')}
            </td>
            <td>
                {getValueFromArray('PTS')}
            </td>
            <td>
                {getValueFromArray('FGA')}
            </td>
            <td>
                {getValueFromArray('FGM')}
            </td>
            <td>
                {FGPER}
            </td>
            <td>
                {getValueFromArray('FTA')}
            </td>
            <td>
                {getValueFromArray('FTM')}
            </td>
            <td>
                {FTPER}
            </td>
            <td>
                {getValueFromArray('2FGA')}
            </td>
            <td>
                {getValueFromArray('2FGM')}
            </td>
            <td>
                {FG2PER}
            </td>
            <td>
                {getValueFromArray('3FGA')}
            </td>
            <td>
                {getValueFromArray('3FGM')}
            </td>
            <td>
                {FG3PER}
            </td>
            <td>
                {getValueFromArray('OREB') + getValueFromArray('DREB')}
            </td>
            <td>
                {getValueFromArray('DREB')}
            </td>
            <td>
                {getValueFromArray('OREB')}
            </td>
            <td>
                {getValueFromArray('AST')}
            </td>
            <td>
                {getValueFromArray('STL')}
            </td>
            <td>
                {getValueFromArray('TO')}
            </td>
            <td>
                {getValueFromArray('BLK_FV')}
            </td>
            <td>
                {getValueFromArray('BLK_AG')}
            </td>
            <td>
                {getValueFromArray('PF_FV')}
            </td>
            <td>
                {getValueFromArray('PF_RV')}
            </td>
        </tr>
    )
}