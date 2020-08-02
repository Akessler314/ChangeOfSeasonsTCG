import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Homepage from './pages/Homepage/index';
import About from './pages/About/index';
import SignUp from './pages/Sign Up/index';
import Signin from './pages/Sign In/index';
import ForgotPassword from './pages/Forgot-Password/index';
import UserProfile from './pages/UserProfile/index';
import Lobby from './pages/Lobby/index'

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route exact path='/About' component={About}/>
                    <Route exact path='/Signup' component={SignUp}/>
                    <Route exact path='/Signin' component={Signin} />
                    <Route exact path='/Forgot' component={ForgotPassword}/>
                    <Route exact path = '/Profile' component = {UserProfile}/>
                    <Route exact path = '/Lobby' component = {Lobby}/>

                </Switch>
            </div>
        </Router>
    )
}

export default App;