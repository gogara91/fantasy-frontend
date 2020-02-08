import React from 'react';

export default function(props) {
    return (
        <nav className="nav nav-tabs">
            {props.children}
        </nav>
    )
}