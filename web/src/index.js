import React from 'react';
import { createBrowserHistory } from 'history';
import dva from 'dva';
import { Router, Route, Switch, Redirect } from 'dva/router';
import TestDemo from './components/Test/index.jsx';
import Home from './components/Home/index.jsx';

const app = dva({
    history: createBrowserHistory(),
});

app.router(({ history }) => (
    <Router history={history}>
        <Switch>
            <Route path="/app" exact component={() => <TestDemo />}></Route>
            <Route path="/home" exact component={() => <Home />}></Route>
            <Redirect to="/app" />
        </Switch>
    </Router>
));

app.start('#app');
