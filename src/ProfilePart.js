import React from 'react';

let ProfilePart = ({avatar, username}) => {
    return (
        <div className='profile-part'>
            <img src={avatar} alt='avatar'/>
            <div className='username'>{username}</div>
        </div>
    )
}

export default ProfilePart;