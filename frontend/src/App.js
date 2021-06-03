import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import routes from './routes';
function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route,index) => {
                    return <Route path={route.path} exact component={route.component} /> 
                })}
            </Switch>
        </Router>
    )
}

export default App
