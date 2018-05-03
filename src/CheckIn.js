import React from 'react';
import ProfilePart from './ProfilePart';
import GoalPart from './GoalPart';
import CheckInPart from './CheckInPart';


let CheckIn = ({checkin}) => {
    console.log(checkin)
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
        <div>
            <ProfilePart avatar={avatar} username={username}/>
            <GoalPart deadline={deadline} goalname={goalname}/>
            <CheckInPart 
                checkinImg={checkinImg} 
                checkinDesc={checkinDesc}
                created={created}
            />
        </div>
    )
}

export default CheckIn;