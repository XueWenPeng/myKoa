import dva from 'dva'
import createHistory from 'history/createBrowserHistory'
import { Router, Route } from 'dva/router'

const app = dva({
    history: createHistory(),
})

// app.router(
//     history => (
//         <Router history={history}>
//             <Route path="/" component={<div>fawewfw</div>}></Route>
//             <Route path="/home" component={() => <div>hahahha</div>} />
//         </Router>
//     )
// )

app.start('app')