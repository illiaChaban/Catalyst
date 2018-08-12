import React from 'react';
import { fetchUser, fetchMe } from '../../actions/fetch';
import ProfileIcon from './ProfileIcon';
import ButtonAddFriend from './ButtonAddFriend';
import ButtonDeleteFriend from './ButtonDeleteFriend';
import LogOutBtn from './LogOutBtn';
import { updateFriends } from '../../actions/dispatch';
import { fetchUpdateFriends } from '../../actions/fetch';


class ProfileIconPart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            redirectToProfile: false,
        }   
    }

    componentDidUpdate(prevProps){
        let { me, userId } = this.props;
        // it's NOT user's page
        if ( 
            this.props.userId 
            && prevProps !== this.props
        ) {
            fetchUser(this.props.userId)
            .then( user => {
                this.setState({user})
            })
        }

        // it's user's page
        if ( userId && userId === me.userid.toString() ) {
            this.props.history.replace('/main/profile-page')
        }
        if ( !userId && prevProps !== this.props ) this.setState({ user: { ...me}})

    }
    
    updateFriend(userid, action) {
        let { me, myFriends, dispatch } = this.props;
        let newFriendsArray = action === 'add' ?
            [...myFriends, userid.toString()] :
            myFriends.filter( x => x !== userid.toString());
        fetchUpdateFriends(me.userid, newFriendsArray)
        .then( res => res.status === 200 && updateFriends({dispatch, friends: newFriendsArray}))
    }

    render() {
        let { user, redirectToProfile } = this.state;
        let { userId, me, history, myFriends } = this.props;
        let itsMyFriend = userId ? myFriends.find( friendId => friendId === userId.toString()) : false;
        let itsMe =  user.userid === me.userid || history.location.pathname === '/main/profile-page';

        return(
            <div className="profile-icon-part">
                <ProfileIcon user={user}/>
                {!itsMe && !itsMyFriend && <ButtonAddFriend handler={() => this.updateFriend(user.userid, 'add')}/>}
                {!itsMe && itsMyFriend && <ButtonDeleteFriend handler={() => this.updateFriend(user.userid, 'delete')}/>}
                {itsMe && <LogOutBtn/>}
            </div>
        )
    }
}

export default ProfileIconPart;