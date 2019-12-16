import React, { Component } from 'react'
import Teams from './pages/Teams.js';
import Players from './pages/Players.js'
import Login from './pages/auth/Login.js'
import Register from './pages/auth/Register.js'
import Logout from './pages/auth/Logout';
import Navbar from './components/partials/Navbar.js';
import Team from './pages/Team';
import {ProtectedRoute} from './components/ProtectedRoute'
import {GuestRoute} from './components/GuestRoute'

import {
  BrowserRouter as Router,
  // Route,
} from "react-router-dom";

export default class Routing extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar></Navbar>
                    <div className='container mt-3'>
                        <ProtectedRoute path='/players' component={Players} ></ProtectedRoute>
                        <ProtectedRoute path='/teams/:id' component={Team} ></ProtectedRoute>
                        <ProtectedRoute exact path='/teams' component={Teams} ></ProtectedRoute>
                        <ProtectedRoute exact path='/logout' component={Logout} ></ProtectedRoute>
                        <GuestRoute path='/login' component={Login} ></GuestRoute>
                        <GuestRoute path='/register' component={Register} ></GuestRoute>
                    </div>

                </div>
            </Router>
        )
    }
}

