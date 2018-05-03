import {createStore} from 'redux';
import { updateUserInfoReducer, updateFriendsReducer } from './actions/reducers';
import { updateUserInfo, updateFriends } from './actions/dispatch';

let initialState = {
    user: {
        username: '',
        userid: '',
        avatar: '',
    },
    goals: [],
    friends: [],
};

let reducers = {
    [updateUserInfo]: updateUserInfoReducer, 
    [updateFriends]: updateFriendsReducer,
}

let reducer = (oldState = initialState, action) => {
    if (reducers[action.type]) {
        let newState = reducers[action.type](oldState, action);
        console.log('new redux state: ', newState);
        return newState;
    }
    return oldState;
}

let store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;