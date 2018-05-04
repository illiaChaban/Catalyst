import React from 'react';

let Friend = ({friend}) => {

    return (
        <div className='friend-container'>
            <ul>
                <li><img src={friend.avatar} alt="user"/></li>
                <li><span>{friend.username}</span></li>
                <li><i className="fas fa-angle-right fa-2x"></i></li>
            </ul>
        </div> 
    )
}

export default Friend;