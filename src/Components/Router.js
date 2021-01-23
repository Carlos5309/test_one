import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../Page/Home/App';
import { Header } from '../Components/Header'
import { Error } from '../Components/Error'
    
function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route  path='/Header' component={Header} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;

