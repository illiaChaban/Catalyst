const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const UPDATE_FRIENDS = 'UPDATE_FRIENDS';

export let updateUserInfo = ({dispatch, user}) => {
    dispatch({
        type: UPDATE_USER_INFO,
        payload: user,
    })
}
updateUserInfo.toString = () => UPDATE_USER_INFO;

export let updateFriends = ({dispatch, friends}) => 
dispatch({
    type: UPDATE_FRIENDS,
    payload: friends,
})
updateFriends.toString = () => UPDATE_FRIENDS;