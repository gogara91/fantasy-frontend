import React from 'react';
import PropTypes from 'prop-types';

function PrimaryButton(props) {
    return(
        <>
            <button
                className='btn btn-outline-primary btn-sm'
                onClick={() => props.onClick()}
            >
                {props.buttonText}
            </button>
        </>
    )
}

export default PrimaryButton;