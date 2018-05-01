import React, { Component } from 'react';
import { connect } from 'react-redux';
// import DeadlineDate from './DeadlineDate';


class CreateGoalPage extends Component  {
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            title: '',
            description: '',
            deadline: '',
            month: '',
            day: '',
            year: ''
        }
    }

    handleSubmit = () => {
        let url = 'http://localhost:5000/goals';
        let post = {
            method: 'POST',
            body: JSON.stringify({
                userid: this.state.user.userid,
                title: this.state.title,
                description: this.state.description,
                deadline: this.state.deadline
            })

        };

        fetch(url, post)
        .then(data => console.log(data))
    }

    render (){
        
        return (
            <div>
                <h1>Goal title:</h1>
                <input onChange={(event) => this.setState({ title:event.target.value }) } type="text" required/>
                <h1>Goal description:</h1>
                <input onChange={(event) => this.setState({ description:event.target.value }) } type="text" required/>
                <h1>Goal deadline:</h1>
                <div className="date">
                    <input onChange={(event) => this.setState({ month:event.target.value }) } type='number' min="1" max="31" required /> 
                    <label>/</label>
                    <input onChange={(event) => this.setState({ day:event.target.value }) } type='number' min="1" max="12" required />
                    <label>/</label>
                    <input onChange={(event) => this.setState({ day:event.target.value }) } type='number' min="2018" max="2200" required /> 
                </div>
                <button onClick={this.handleSubmit}>Submit Goal</button>
            </div>
        )
    }
    
}

export default connect(
    state => ({ user: state.user})
)(CreateGoalPage);