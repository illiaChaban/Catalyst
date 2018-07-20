import React from 'react';

let ButtonAddFriend = ({handler}) => {

    return (
        <button 
            className='add-friend'
            onClick={handler}
        >ADD FRIEND
        </button>
    )
}

export default ButtonAddFriend;