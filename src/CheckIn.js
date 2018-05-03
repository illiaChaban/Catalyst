import React from 'react';
import ProfilePart from './ProfilePart';
import GoalPart from './GoalPart';
import CheckInPart from './CheckInPart';


let CheckIn = ({checkin}) => {
    // console.log(checkin)
    let {
        avatar, 
        created, 
        deadline, 
        description: checkinDesc, 
        goalname, 
        image: checkinImg, 
        username
    } = checkin;

    return(
        <div className='checkin'>
            <ProfilePart avatar={avatar} username={username}/>
            <div className='goal-checkin-block'>
                <GoalPart deadline={deadline} goalname={goalname}/>
                <CheckInPart 
                    checkinImg={checkinImg} 
                    checkinDesc={checkinDesc}
                    created={created}
                />
            </div>
        </div>
    )
}

export default CheckIn;