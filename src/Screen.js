import React from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';
import CreateGoalPage from './CreateGoalPage';
import ProfilePage from './ProfilePage';
import RegisterPage from './RegisterPage';

let DumbHomepage = () =>
<div>Dumb Homepage</div>

let ScreenDumb = () => {   
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={DumbHomepage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path='/create-goal' component={CreateGoalPage} />
                    <Route path='/profile-page' component={ProfilePage} />
                    <Route path='/register' exact component={RegisterPage} />
                </Switch>
            </Router>
        </div>
    )
 }

let Screen = connect(
    state => ({state})
)(ScreenDumb)

export default Screen;