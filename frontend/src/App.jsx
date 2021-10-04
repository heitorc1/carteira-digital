import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views/pages/Home'
import Login from './views/pages/Login'
import Register from './views/pages/Register'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/register">
                        <Register></Register>
                    </Route>
                    <Route path="/">
                        <Login></Login>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        )
    }
}