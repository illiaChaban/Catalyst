import React from 'react';

let CheckInPart = ({checkinImg, checkinDesc, created}) => {
    // console.log(checkinDesc, checkinImg, created)
    let time;
    if (created) time = created.slice(0,10) + ' ' + created.slice(11, 16);
    return (
        <div className="checkin-part">
            {checkinImg && <img src={checkinImg} alt='checkin'/>}
            <div className='checkin-desc'>{checkinDesc}</div>
            <div className='checkin-created'>
                created: {time}
            </div>
        </div>
    )
}

export default CheckInPart;