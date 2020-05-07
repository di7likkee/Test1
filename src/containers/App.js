import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Header from '../components/Header/Header.js';
import Services from './Services';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />

                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/services" component={Services} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;