import React from 'react';
import Option from './Option';

class SelectGoal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            goals: [],
        }
    }

    render() {
        let {handler} = this.props;
        let { goals } = this.state;

        return (
            <select onChange={handler}>
                <option value=''>Choose goal</option>
                {goals.length && goals.map( (goal, i) => {
                    <Option goal={goal} key={i}/>
                })}
            </select>
        )
    }
}


export default SelectGoal;