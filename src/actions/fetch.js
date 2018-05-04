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

export let fetchGoals = (userId) => {
    // console.log(typeof userId)
    return (
        fetch('http://localhost:5000/getMyGoals', {
            method: 'POST',
            body: JSON.stringify(userId)
        })
        .then( res => res.json())
    ) 
}

export let fetchFriendList = (userId) => {
    return (
        fetch('http://localhost:5000/getMyFriends', {
            method: 'POST',
            body: JSON.stringify(userId)
        })
        .then( res => res.json())
    ) 
}

export let fetchUser = (userId) => {
    return (
        fetch('http://localhost:5000/getUser', {
            method: 'POST',
            body: JSON.stringify(userId)
        })
        .then(res => res.json())
    )

}

export let fetchCheckins = (userId) =>
    fetch('http://localhost:5000/getMyCheckins', {
        method: 'POST',
        body: JSON.stringify(userId)
    })
    .then(res => res.json());


