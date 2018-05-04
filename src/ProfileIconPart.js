import React from 'react';
// import { connect } from 'react-redux';

class ProfileIconPart extends React.Component{

    render() {
        let { user } = this.props;
        // console.log(user)
        return(
            <div className="profile-icon-part">
                <div>
                    <img src={user.avatar} alt='avatar'/>
                    <div className='username'>{user.username}</div>
                </div>
            </div>
        )
    }
}

export default ProfileIconPart;