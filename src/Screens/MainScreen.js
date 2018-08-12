import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CreateGoalPage from '../CreateGoalPage/CreateGoalPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import FriendsPage from '../FriendsPage/FriendsPage';
import Feed from '../Feed/Feed';
import Navbar from '../Other/Navbar';

let MainScreen = () => {   
    return(
        <div className='route-container'>
            <Switch>
                <Route exact path='/main/feed' component={Feed}/>
                <Route exact path='/main/create-goal' component={CreateGoalPage} />
                <Route exact path='/main/profile-page' component={ProfilePage} />
                <Route exact path='/main/friends' component={FriendsPage} />
                <Route exact path='/main/friends/:userid' component={ProfilePage} />
            </Switch>
            <div className="navbar-placeholder"></div>
            <Navbar/>
        </div>
    )
}

export default MainScreen;
