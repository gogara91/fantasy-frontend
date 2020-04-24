import React, { Component } from 'react'

import {ProtectedRoute} from './components/ProtectedRoute'
import {GuestRoute} from './components/GuestRoute'
import {AdminRoute} from './components/AdminRoute'

import Games from './pages/Games/Games';
import LiveGamePanel from './pages/Games/LiveGamePanel';
import Teams from './pages/Teams/Teams';
import Team from './pages/Teams/Team';
import EditTeam from './pages/Teams/EditTeam';
import StartGamePanel from './pages/Games/StartGamePanel'
import Players from './pages/Players';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Logout from './pages/auth/Logout';
import Navbar from './components/partials/Navbar';
import AdminSidebar from './components/partials/AdminSidebar';
import AdminPanel from './pages/AdminPanel';
import AdminContent from './components/partials/AdminContent';
import {BrowserRouter as Router} from "react-router-dom";
import {connect} from 'react-redux';
import {Row} from 'react-bootstrap';
import UserHomePage from "./pages/Home/UserHomePage";
import EditFantasyTeam from "./pages/FantasyTeams/EditFantasyTeam";
class Routing extends Component {
    render() {
        const adminRoutes =  !this.props.isAdmin ? '' :
            <AdminContent>
                <AdminRoute exact path='/admin/dashboard' component={AdminPanel} />
                <AdminRoute exact path='/admin/teams' component={Teams} />
                <AdminRoute exact path='/admin/games' component={Games} />
                <AdminRoute exact path='/teams/:id' component={Team}  />
                <AdminRoute exact path='/teams/:id/games' component={Team} />
                <AdminRoute exact path='/teams/:id/scores' component={Team} />
                <AdminRoute exact path='/teams/:id/edit' component={EditTeam}  />
                <AdminRoute exact path='/games/:id/start-game' component={StartGamePanel}  />
                <AdminRoute exact path='/games/live-game-panel/:id' component={LiveGamePanel}  />
            </AdminContent>;

        return (
            <Router>
                <Row noGutters={true}>
                    { this.props.isAdmin ? <AdminSidebar></AdminSidebar> : <Navbar></Navbar> }
                    <ProtectedRoute exact path='/' component={UserHomePage}  />
                    <ProtectedRoute exact path='/logout' component={Logout}  />
                    <ProtectedRoute exact path='/fantasy-teams/:id/edit' component={EditFantasyTeam}  />
                    <GuestRoute path='/login' component={Login}  />
                    <GuestRoute path='/register' component={Register}  />
                    {adminRoutes}
                </Row>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAdmin: state.AuthStore.isAdmin
    }
}

export default connect(mapStateToProps)(Routing);


