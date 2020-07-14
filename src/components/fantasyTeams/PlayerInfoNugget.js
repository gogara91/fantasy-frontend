import React from "react";

export default (props) => {
    return (
        <div className="team-position-nugget-wrapper">
            <div className="nugget">
                <div className="nugget-up">
                    {props.teamAbbreviation}
                </div>
                <div className="nugget-down">
                    {props.position}
                </div>
            </div>
        </div>
    )
}