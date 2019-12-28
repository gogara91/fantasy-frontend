import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrimaryUrlButton(props) {
    return(
        <>
            <Link
                className='btn btn-outline-primary btn-sm'
                to={props.url}
            >
                props.name
            </Link>
        </>
    )
}

PrimaryUrlButton.PropTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
}

export default PrimaryUrlButton;