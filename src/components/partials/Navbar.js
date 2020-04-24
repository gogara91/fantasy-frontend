import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {

    links = [
        { to: '/', name: 'Home', type: 'auth'},
        { to: '/teams', name: 'Teams', type: 'auth'}
    ];

    authLinks = [
        { to: '/login', name: 'Login', type: 'guest'},
        { to: '/register', name: 'Register', type: 'guest'},
        { to: '/logout', name: 'Logout', type: 'auth'},
    ]
    render() {
        const links = this.links.map((link, index)  => {
            if(this.props.isAuthenticated && link.type === 'auth') {
                return <li key={index}><Link key={index} className='nav-link' to={link.to}>{link.name}</Link></li>
            }
            if(!this.props.isAuthenticated && link.type === 'guest') {
                return <li key={index}><Link key={index} className='nav-link' to={link.to}>{link.name}</Link></li>
            }
            if(link.type === 'public') {
                return <li key={index}><Link key={index} className='nav-link' to={link.to}>{link.name}</Link></li>
            }
        });

        const authLinks = this.authLinks.map((link, index)  => {
            if(this.props.isAuthenticated && link.type === 'auth') {
                return <li key={index}><Link className='nav-link' to={link.to}>{link.name}</Link></li>
            }
            if(!this.props.isAuthenticated && link.type === 'guest') {
                return <li key={index}><Link className='nav-link' to={link.to}>{link.name}</Link></li>
            }
            if(link.type === 'public') {
                return <li key={index}><Link className='nav-link' to={link.to}>{link.name}</Link></li>
            }
        });
        return (
            <div className='col-md-12'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className='container'>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse row" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto col-sm-6">
                                {links}
                            </ul>
                            <ul className="align-content-lg-end navbar-nav">
                                {authLinks}
                            </ul>

                        </div>

                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.AuthStore.isAuthenticated,
        user: state.AuthStore.user

    }
}
export default connect(mapStateToProps)(Navbar);