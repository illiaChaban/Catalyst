import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store'; 
import Screen from './Screen';  
import testRequest from './lib/testDbRequest';

window.test = testRequest;

let TopLevel = () => 
    <Provider store={store}>
        <Screen />
    </Provider>

ReactDOM.render(<TopLevel />, document.getElementById('root'));
