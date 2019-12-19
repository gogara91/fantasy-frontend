import React, { Component } from 'react'

import {ProtectedRoute} from './components/ProtectedRoute'
import {GuestRoute} from './components/GuestRoute'
import {AdminRoute} from './components/AdminRoute'

import Teams from './pages/Teams';
import Players from './pages/Players'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Logout from './pages/auth/Logout';
import Navbar from './components/partials/Navbar';
import AdminSidebar from './components/partials/AdminSidebar';
import Team from './pages/Team';
import AdminPanel from './pages/AdminPanel'
import AdminContent from './components/partials/AdminContent'
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from 'react-redux';
import {Row} from 'react-bootstrap'

class Routing extends Component {
    render() {
        return (
            <Router>
                <Row noGutters={true}>
                    { this.props.isAdmin ? <AdminSidebar></AdminSidebar> : <Navbar></Navbar> }
                    <ProtectedRoute path='/players' component={Players}  />
                    <ProtectedRoute path='/teams/:id' component={Team}  />
                    <ProtectedRoute exact path='/teams' component={Teams}  />
                    <ProtectedRoute exact path='/logout' component={Logout}  />
                    <GuestRoute path='/login' component={Login}  />
                    <GuestRoute path='/register' component={Register}  />
                    <AdminContent>
                        <AdminRoute exact path='/admin' component={AdminPanel} />
                    </AdminContent>
                </Row>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAdmin: state.authStore.isAdmin
    }
}

export default connect(mapStateToProps)(Routing);


