import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../Page/Home/App';
import Header from '../Components/Header';
import  Form  from '../Components/Form';
import { Error } from '../Components/Error';
import NavbarLogo from '../Components/NavbarLogo/index';
import SliderAnimate from '../Components/Banner/sliderAnimate'
    
function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route  path='/Header' component={Header} />
                <Route  path='/Form' component={Form} />
                <Route  path='/NavbarLogo' component={NavbarLogo} />
                <Route  path='/SliderAnimate' component={SliderAnimate} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;

