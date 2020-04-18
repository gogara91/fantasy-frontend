import React from 'react';
import styles from '../../css/ScorePanel.css'
export default (props) => {
    return (
        <>
            <div className="scoreboard">
                <div className="text-center border-danger">
                    <div className="team-names text-right">t1</div>
                    <div className="between-vs"> vs </div>
                    <div className="team-names text-left">t2</div>
                </div>
                <div className="text-center border-danger">
                    <div className="score-digit text-right text-warning">155</div>
                    <div className="between-line text-warning">-</div>
                    <div className="score-digit text-left text-warning">155</div>
                </div>
                <div className="text-center border-danger">
                    <div className="score-digit text-right"></div>
                    <div className="between-line text-danger">15:40</div>
                    <div className="score-digit text-left"></div>
                </div>

                <div className="text-center border-danger">
                    <div className="between-vs"> Period </div>
                </div>
                <div className="text-center border-danger">
                    <div className="between-line text-warning">1</div>
                </div>
                <div className="text-center border-danger">
                    <div className="between-vs"> Team fouls </div>
                </div>
                <div className="text-center border-danger">
                    <div className="score-digit text-right text-warning">0</div>
                    <div className="between-line text-warning"></div>
                    <div className="score-digit text-left text-warning">2</div>
                </div>
            </div>
        </>
    )
}
