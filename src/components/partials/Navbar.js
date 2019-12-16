import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

    links = [
        { to: '/players', name: 'Players', type: 'auth'},
        { to: '/teams', name: 'Teams', type: 'auth'},
        { to: '/login', name: 'Login', type: 'guest'},
        { to: '/register', name: 'Register', type: 'guest'},
        { to: '/logout', name: 'Logout', type: 'auth'},
    ];

    render() {
        const links = this.links.map((link, index)  => {
            if(this.props.isAuthenticated && link.type === 'auth') {
                return <Link key={index} className='nav-link' to={link.to}>{link.name}</Link>
            }
            if(!this.props.isAuthenticated && link.type === 'guest') {
                return <Link key={index} className='nav-link' to={link.to}>{link.name}</Link>
            }
            if(link.type === 'public') {
                return <Link key={index} className='nav-link' to={link.to}>{link.name}</Link>
            }
        })
        return (
            <div className='card'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {links}
                        </ul>
                    </div>
                    </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {isAuthenticated: state.authStore.isAuthenticated}
}
export default connect(mapStateToProps)(Navbar);