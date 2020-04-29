import React from "react";

export default(props) => {
    const {first_name, last_name} = props.player;
    return (
        <div>
            {first_name} {last_name}
        </div>
    )
}