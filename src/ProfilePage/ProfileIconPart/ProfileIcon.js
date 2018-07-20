import React from 'react';

let ProfileIcon = ({user}) => {
    return (
     <div>
         <img src={user.avatar} alt='avatar'/>
         <div className='username'>{user.username}</div>
     </div>
    )
 }

 export default ProfileIcon;