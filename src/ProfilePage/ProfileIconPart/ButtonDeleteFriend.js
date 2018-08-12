import React from 'react';

let ButtonDeleteFriend = ({handler}) => 
    <button className='main-btn' onClick={handler}>
        <i className="far fa-check-circle"></i> | Unfollow
    </button>

export default ButtonDeleteFriend;