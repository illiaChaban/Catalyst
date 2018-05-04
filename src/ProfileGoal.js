import React from 'react';
import moment from 'moment';

let ProfileGoal = ({goal}) => {

    // console.log(goal)
    let deadline = moment(goal.deadline, 'YYYY-MM-DD-hh:mm').fromNow();
    
    return (
        <div className='profile-goal'>
            <h3>{goal.goalname}</h3>
            <div className='deadline'>
                Deadline: {deadline}
            </div>
        </div> 
    )
}

export default ProfileGoal;