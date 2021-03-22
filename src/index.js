import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
import App from './App'
import Home from './components/Home';
import SignUp from './components/SignUp';


ReactDOM.render(
(<BrowserRouter>
    <Switch>
        <Route exact path='/hi' component={SignUp} />
        <Route exact path='/' component={Home} />
    </Switch>
</BrowserRouter>), document.getElementById('root'));