import React from 'react';
// import { connect } from 'react-redux';
import { fetchUser, fetchFriendList } from './actions/fetch';
import ProfileIcon from './ProfileIcon';
import ButtonAddFriend from './ButtonAddFriend';
import YouAreFriends from './YouAreFriends';
import LogOutBtn from './LogOutBtn';


class ProfileIconPart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: '',
            myFriends: []
        }   
    }

    componentDidUpdate(prevProps){
        if( prevProps !== this.props) {
            fetchUser(this.props.userId)
            .then( user => {
                this.setState({user})
            })
            .then( () => {
                fetchFriendList(this.props.me.userid)
                .then(myFriends => {
                    // console.log(myFriends)
                    this.setState({myFriends})
                })
            })
        }
    }



    render() {
        let { user, myFriends } = this.state;
        let { userId, me} = this.props;
        let itsMyFriend = myFriends.find( friend => friend.userid === user.userid);
    

        let addFriend = (userid) => {
            let newFriendsArray = myFriends.map( el => (el.userid.toString()))
            newFriendsArray.push(userid.toString());
            fetch('http://localhost:5000/addFriend', {
                method: 'POST',
                body: JSON.stringify({
                    userid: this.props.me.userid,
                    friendsarray: JSON.stringify(newFriendsArray)
                })
            })
        }

        return(
            <div className="profile-icon-part">
                {user ? 
                <ProfileIcon user={user}/> : 
                <ProfileIcon user={me}/>}
                {user && !itsMyFriend && <ButtonAddFriend handler={() => addFriend(user.userid)}/>}
                {user && itsMyFriend && <YouAreFriends/>}
                {!user && <LogOutBtn props={this.props}/>}
            </div>
        )
    }
}

export default ProfileIconPart;