import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage';
import CreateGoalPage from './CreateGoalPage';
import RegisterPage from './RegisterPage';
import Feed from './Feed';
import InitialRouter from './InitialRouter';

let Screen = () => {   
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={InitialRouter}/>
                    <Route path="/login" exact component={LoginPage} /> 
                    <Route path='/feed' component={Feed}/>
                    <Route path='/create-goal' component={CreateGoalPage} />
                    <Route path='/register' exact component={RegisterPage} />
                </Switch>
            </Router>
        </div>
    )
}

export default Screen;