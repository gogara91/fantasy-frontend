import React from 'react';
import { Link } from 'react-router-dom';

export default function(props) {

    let classes = ['nav-link'];
    if(props.currentUrl == props.to) {
        classes.push('active');
    }
    return (
        <Link className={classes.join(' ')} to={props.to}>{props.children}</Link>
    )
}