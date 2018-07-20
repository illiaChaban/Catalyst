import React from 'react';

let Option = ({goal}) => {
    return (
        <option value={goal.goalid}>
            {goal.goalname}
        </option>
    )
}


export default Option;