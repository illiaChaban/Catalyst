import React, { Component } from 'react';
import axios from 'axios';

class CreateGoalPage extends Component  {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            deadline: ''
        }
    }

    handleSubmit = () => {
        let post = {
            method: 'POST',
            url: 'http://localhost:5000/goals',
            body: {
                title: this.state.title,
                description: this.state.description,
                deadline: this.state.deadline
            }

        };

        axios(post)
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

export default CreateGoalPage;