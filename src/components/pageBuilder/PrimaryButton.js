import React from 'react';
import PropTypes from 'prop-types';

function PrimaryButton(props) {
    const color = props.color ? props.color : 'primary'
    return(
        <>
            <button
                className={`btn btn-outline-${color} btn-sm ${props.className}`}
                onClick={() => props.onClick()}
            >
                {props.children}
            </button>
        </>
    )
}

export default PrimaryButton;