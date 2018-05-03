const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

export let updateUserInfo = ({dispatch, user}) => {
    dispatch({
        type: UPDATE_USER_INFO,
        payload: user,
    })
}
updateUserInfo.toString = () => UPDATE_USER_INFO;