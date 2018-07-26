export let updateUserInfoReducer = (oldState, action) => {
    let { username, avatar, userid, friendsarray} = action.payload;
    let user = { username, avatar, userid };
    let friends = JSON.parse(friendsarray)
    return ({ ...oldState, user, friends})
};

export let updateFriendsReducer = (oldState, action) => ({...oldState, friends: action.payload});