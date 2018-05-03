export let updateUserInfoReducer = (oldState, action) => ({ ...oldState, user: action.payload})

export let updateFriendsReducer = (oldState, action) => ({...oldState, friends: action.payload});