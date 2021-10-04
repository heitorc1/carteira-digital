import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Transferencia from './views/pages/Transferencia'
import Extrato from './views/pages/Extrato'
import Login from './views/pages/Login'
import Registro from './views/pages/Registro'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/registro">
                        <Registro></Registro>
                    </Route>
                    <Route path="/extrato">
                        <Extrato></Extrato>
                    </Route>
                    <Route path="/transferencia">
                        <Transferencia></Transferencia>
                    </Route>
                    <Route path="/">
                        <Login></Login>
                    </Route>
                </Switch>
            </Router>
        )
    }
}