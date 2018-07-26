import React from 'react';
import moment from 'moment';


let GoalPart = ({deadline, goalname}) => {
    let time = moment(deadline, 'YYYY-MM-DD-hh:mm').fromNow();
    return (
        <div className='goal-part'>
            <div className='goalname'>
                Goal: {goalname}
            </div>
            <div className='deadline'>
                deadline: {time}
            </div>
        </div>
    )
}

export default GoalPart;