import React from 'react';
import PropTypes from 'prop-types';

function PrimaryButton(props) {
    return(
        <>
            <button
                className={['btn btn-outline-primary btn-sm ' + props.className]}
                onClick={() => props.onClick()}
            >
                {props.children}
            </button>
        </>
    )
}

export default PrimaryButton;