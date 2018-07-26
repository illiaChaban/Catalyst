import React from 'react';
import { fetchUser, fetchMe } from '../../actions/fetch';
import ProfileIcon from './ProfileIcon';
import ButtonAddFriend from './ButtonAddFriend';
import YouAreFriends from './YouAreFriends';
import LogOutBtn from './LogOutBtn';
import { updateUserInfo } from '../../actions/dispatch'


class ProfileIconPart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
        }   
    }

    componentDidUpdate(prevProps){
        if ( prevProps.userId 
            && prevProps !== this.props
        ) {
            fetchUser(this.props.userId)
            .then( user => {
                this.setState({user})
            })
        }
    }



    render() {
        let { user } = this.state;
        let { userId, me, history, myFriends, dispatch} = this.props;
        let itsMyFriend = userId ? myFriends.find( friendId => friendId === userId.toString()) : false;

        let addFriend = (userid) => {
            let newFriendsArray = [...myFriends]
            newFriendsArray.push(userid.toString());
            fetch('http://localhost:5000/api/addFriend', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    userid: me.userid,
                    friendsarray: JSON.stringify(newFriendsArray)
                })
            })
            .then( async res => {
                if (res.status === 200) {
                    let response = await fetchMe();

                    if (response.status === 200) {
                        let user = await response.json();
        
                        updateUserInfo({dispatch, user })
                    }
                }
            })
        }

        console.log(user, userId)

        return(
            <div className="profile-icon-part">
                {!user || ( history && history.location.pathname === '/main/profile-page') ?
                <ProfileIcon user={me}/>: 
                <ProfileIcon user={user}/>}
                {user && !itsMyFriend && userId && <ButtonAddFriend handler={() => addFriend(user.userid)}/>}
                {user && itsMyFriend && <YouAreFriends/>}
                {!userId && <LogOutBtn props={this.props}/>}
            </div>
        )
    }
}

export default ProfileIconPart;