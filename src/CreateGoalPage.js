import React, { Component } from 'react';
import {connect } from 'react-redux';

class CreateGoalPage extends Component  {
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            title: '',
            description: '',
            deadline: ''
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
                <input onChange={(event) => this.setState({ title:event.target.value }) } type="text"/>
                <h1>Goal description:</h1>
                <input onChange={(event) => this.setState({ description:event.target.value }) } type="text"/>
                <h1>Goal deadline:</h1>
                <input onChange={(event) => this.setState({ deadline:event.target.value }) } type="text"/>
                <button onClick={this.handleSubmit}>Submit Goal</button>
            </div>
        )
    }
    
}

export default connect(
    state => ({ user: state.user})
)(CreateGoalPage);