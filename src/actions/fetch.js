import { updateFriends } from './dispatch';


export let fetchFriends = (dispatch) => 
    fetch('http://localhost:5000/friends', {
        headers: {
            authorization: localStorage.getItem('jwt')
        }
    })
    .then( res => res.json())
    .then( friends => updateFriends({dispatch, friends}))

export let fetchMe = () => 
fetch('http://localhost:5000/user/me', {
    headers: {
        authorization: localStorage.jwt,
    }
})