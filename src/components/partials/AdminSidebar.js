import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

    const links = [
        { to: '/admin/teams', name: 'Teams', type: 'Teams'},

    ];

    const routes = links.map((link, index) => {
        return (
            <li key={index}>
                <Link  to={link.to}>{link.name}</Link>
            </li>
        )
    });

    return (
        <div className="col-md-2">
            <div id="sidebar">
                <header>
                    <Link to='/dashboard'>Fantasy</Link>
                </header>
                <ul className="nav">
                    {routes}
                </ul>
            </div>
        </div>
    )
}