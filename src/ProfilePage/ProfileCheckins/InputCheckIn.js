import React from 'react';

let InputCheckIn = ({handler}) => 
    <input 
        style={{width:'50%'}}
        className='write-new-checkin'
        onChange={handler}>
    </input>

export default InputCheckIn;