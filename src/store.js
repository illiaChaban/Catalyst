import {createStore} from 'redux';

let initialState = {
    user: {
        username: 'illia',
        userid: '1'
    },
    goals: [],
    friends: [],
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

export default store;