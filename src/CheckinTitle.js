import React from 'react';

let CheckinTitle = ({userId, me, toggleInput}) => 
    <div className='profile-title'> 
        <div>Recent Checkins: </div>
        {
            ( !userId || userId === me.userid.toString() ) &&
                <i onClick={toggleInput} className="fas fa-plus-circle"></i>
        }
    </div>

export default CheckinTitle;