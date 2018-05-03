import React, { Component } from 'react';

class NewCheckIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            checkInText: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.checkInText);

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add new checkin</h1>
                <input type="text" onChange={(event) => this.setState({ checkInText: event.target.value })} />
                {/* <select>
                    {this.props.goals.map(goal => {
                        return <option value={goal.goalid}> {goal.goalname} </option>
                    })}
                </select> */}
            </form>
        )
    }
    
}
    

export default NewCheckIn;