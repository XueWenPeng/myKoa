import React from 'react'
import dva from 'dva'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch, Redirect } from 'dva/router'

const app = dva({
    history: createBrowserHistory(),
})

app.router(
    ({ history }) => (
        <Router history={history}>
            <Switch>
                <Route path="/home" exact component={() => <div>hahahha</div>}></Route>
            </Switch>
        </Router>
    )
)

app.start('#app')