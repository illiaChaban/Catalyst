import React from 'react';
import moment from 'moment';

let ProfileGoal = ({goal}) => {
    console.log(goal)
    let deadline = moment(goal.deadline, 'YYYY-MM-DD-hh:mm').fromNow();
    return (
        <div className='profile-goal'>
            <h3>{goal.goalname}</h3> 
            {/* <span className='deadline'>{deadline}</span> */}
            <div className='deadline'>
                {deadline} <span className='or'>OR</span> {goal.punishment}
            </div>
        </div> 
    )
}

export default ProfileGoal;