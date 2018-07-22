import React from 'react';

let BtnGeneratePunishment = ({handler}) => 
    <button 
        onClick={handler}
        className='btn-generate-punishment' 
        >Generate Punishment
    </button>

export default BtnGeneratePunishment;