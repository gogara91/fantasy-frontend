import React, { Component } from 'react'
import Teams from './pages/Teams.js';
import Players from './pages/Players.js'
import Login from './pages/auth/Login.js'
import Register from './pages/auth/Register.js'
import Navbar from './components/partials/Navbar.js';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

export default class Routing extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar></Navbar>
                    <Route path='/players' component={Players}></Route> 
                    <Route path='/teams' component={Teams}></Route> 
                    <Route path='/login' component={Login}></Route> 
                    <Route path='/register' component={Register}></Route> 
                </div>
            </Router>

        )
    }
}

