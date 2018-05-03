import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import InitialRouter from './InitialRouter';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import MainScreen from './MainScreen';


let Screen = () => {   
    return(
        <div className='route-container'>
            <Router>
                <div>
                    <Route exact path="/" component={InitialRouter}/>
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/register" exact component={RegisterPage} />
                    <Route path='/main' component={MainScreen}/>     
                </div>
            </Router>
        </div>
    )
}

export default Screen;
