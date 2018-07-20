import React from 'react';

let ProfileCheckin = ({checkin}) => {
    // console.log(checkin)
    let { image, description, created} = checkin;
    let time;
    if (created) time = created.slice(0,10) + ' ' + created.slice(11, 16);
    
    return (
        <div className='profile-goal'>
            {image && <img className='inline' src={image} alt='checkin'/>}
            <div>{description}</div>
            <div className='checkin-created'>created: {time}</div>
        </div>
    )
}

export default ProfileCheckin;