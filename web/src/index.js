import React from 'react'
import { createBrowserHistory } from 'history'
import dva from 'dva'
import { Router, Route } from 'dva/router'

const app = dva({
    history: createBrowserHistory(),
})

app.router(
    ({ history }) => (
        <Router history={history}>
            <Route path="/home" exact component={() => <div>hahahha</div>}></Route>
        </Router>
    )
)

app.start('#app')