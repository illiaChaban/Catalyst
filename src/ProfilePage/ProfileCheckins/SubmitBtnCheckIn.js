import React from 'react';

let SubmitBtnCheckIn = ({handlers}) => {
    let { postCheckin, toggleInput, resetNewCheckin } = handlers;
    return (
        <button
            style={{width: '20%'}}
            onClick={() => {
                postCheckin();
                toggleInput();
                resetNewCheckin();
            }}
            >Submit
        </button>
    )
}

export default SubmitBtnCheckIn;