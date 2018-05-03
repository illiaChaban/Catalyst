import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import CreateGoalPage from './CreateGoalPage';
import ProfilePage from './ProfilePage';
import Feed from './Feed';

let MainScreen = () => {   
    return(
        <div className='route-container'>
            <div className="content-container">
            <Switch>
                <Route exact path='/main/feed' component={Feed}/>
                <Route exact path='/main/create-goal' component={CreateGoalPage} />
                <Route exact path='/main/profile-page' component={ProfilePage} />
            </Switch>
            </div>
            <div className="nav-placeholder"></div>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/main/profile-page"><i className="fas fa-user fa-2x hvr-grow"></i></NavLink></li>
                    <li><NavLink to="/main/feed"><i className="fas fa-list-ul fa-2x hvr-grow"></i></NavLink></li>
                    <li><NavLink to="/main/create-goal"><i className="fas fa-clipboard-check fa-2x hvr-grow"></i></NavLink></li>
                    <li><NavLink to="/main/friends"><i className="fas fa-users fa-2x hvr-grow"></i></NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainScreen;
