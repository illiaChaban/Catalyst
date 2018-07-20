import React from 'react';
import Option from './Option';
import { fetchGoals } from '../../actions/fetch';
import { connect } from 'react-redux';

class SelectGoal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            goals: [],
        }
    }

    async componentDidMount(){
        let goals = await fetchGoals(this.props.userId);
        this.setState({goals})
    }

    render() {
        let {handler} = this.props;
        let { goals } = this.state;

        return (
            <select onChange={handler}>
                <option value=''>Choose goal</option>
                {goals.length && 
                    goals.map( (goal, i) => <Option goal={goal} key={i}/>)
                }
            </select>
        )
    }
}


export default connect(
    state => ({ userId: state.user.userid})
)(SelectGoal);