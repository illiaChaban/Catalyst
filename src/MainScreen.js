import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CreateGoalPage from './CreateGoalPage';
import ProfilePage from './ProfilePage';
import Feed from './Feed';

let MainScreen = () => {   
    return(
        <div className='route-container'>hi
        <Switch>
            <Route exact path='/main/feed' component={Feed}/>
            <Route exact path='/main/create-goal' component={CreateGoalPage} />
            <Route exact path='/main/profile-page' component={ProfilePage} />
        </Switch>
        <div className="navbar-goes-here">navbar</div>
        </div>
    )
}

export default MainScreen;
