import React from 'react';

let SubmitBtnCheckIn = ({handlers}) => {
    let { postCheckin, toggleInput, resetNewCheckin } = handlers;
    return (
        <button
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