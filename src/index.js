import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {connect, Provider} from 'react-redux';
import {createStore} from 'redux';
// import registerServiceWorker from './registerServiceWorker';

let initialState = {
    users: [],
    goals: []
};

let reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_FEED':
        console.log('working')
        return {...state}

        default:
            return state;
    }
}

let store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())    

    let Body = () => {   

        return(
             <div>
             Working
         </div>
        )
     }

let TopLevel = () => 
    <Provider store={store}>
        <ConnectScreen />
    </Provider>

let mapStateToProps = (state) => {
    return {state: state}
    }
  
let mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch}
  };
  
let ConnectScreen = connect(
    mapStateToProps,
    mapDispatchToProps
    )(Body);

ReactDOM.render(<TopLevel />, document.getElementById('root'));
// registerServiceWorker();
