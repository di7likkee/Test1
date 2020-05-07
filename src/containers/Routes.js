import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Home from './Home';
import history from './history';
import Services from './Services';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Services" component={Services} />
                </Switch>
            </Router>
        )
    }
}
