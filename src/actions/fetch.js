import { updateFriends } from './dispatch';


export let fetchFriends = (dispatch) => 
    fetch('http://localhost:5000/api/friends', {
        headers: {
            authorization: localStorage.getItem('jwt')
        }
    })
    .then( res => res.json())
    .then( friends => updateFriends({dispatch, friends}))

export let fetchMe = () => {
    return fetch('http://localhost:5000/authentication/user/me', {
        headers: {
            authorization: localStorage.jwt,

        }
    })
}


export let fetchGoals = (userId) => {
    console.log('#### FETCHING GOALS', userId)
    return (
        fetch('http://localhost:5000/api/getMyGoals', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: String(userId)
        })
        .then( res => res.json())
        .catch( console.log)
    ) 
}

export let fetchFriendList = (userId) => {
    return (
        fetch('http://localhost:5000/api/getMyFriends', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: String(userId)
        })
        .then( res => res.json())
    ) 
}

export let fetchUser = (userId) => {
    return (
        fetch('http://localhost:5000/api/getUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: String(userId)
        })
        .then(res => res.json())
        .catch( console.log)
    )

}

export let fetchCheckins = (userId) =>
    fetch('http://localhost:5000/api/getMyCheckins', {
        method: 'POST',
        headers: {
            'Content-Type':'text/plain'
        },
        body: String(userId)
    })
    .then(res => res.json());


