import React, { Component } from 'react';
import { connect } from 'react-redux';
// import CreateGoalPage from './CreateGoalPage';
import { Link } from 'react-router-dom';
import NewCheckIn from './newCheckIn';

class ProfilePage extends Component  {
    constructor(props){
        super(props);
        this.state = {
            user: this.props.user,
            userName: '',
            image: '',
            profileImage: false,
            quote: '',
            goals: [],
            recentCheckIns: [],
            recentGoals: [],
            writingCheckIn: false,
            writingGoal: false
        }
    }

    componentDidMount = async() => {
        let fetchData = await fetch('http://localhost:5000/getCheckins')
        let data = await fetchData.json();
            console.log(data)
            this.setState({ recentCheckIns: data })
        let fetchData2 = await fetch('http://localhost:5000/getGoals')    
        let data2 = await fetchData2.json();
            console.log(data2)
            this.setState({ recentGoals: data2 })
        
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

    saveRenderCheckins = () => {
        if(this.state.recentCheckIns.length > 0) {
            return this.state.recentCheckIns.map((checkin, i) => {
            return <li key={i}>{ checkin.description }</li>
        })
        }
    }

    saveRenderGoals = () => {
        if(this.state.recentGoals.length > 0) {
            return this.state.recentGoals.map((goal, i) => {
            return <li key={i}>{ goal.goalname }</li>
        })
        }
    }



    render (){
        
        return (
            <div>
                {/* personal photo and user name */}
                <h1>Upload your photo:</h1>
                <input type="file" onChange={(event) => {
                    let file = event.target.files[0];
                    let url = URL.createObjectURL(file);
                    console.log(file) 
                    this.setState({ image: url }) }} />
                {console.log(this.state.image)}
                <img alt="profile-img" src={this.state.image} />
                <hr />
                <div>
                    <h1>My personal goals</h1>
                    <Link to='/create-goal'><img  alt="plus-icon" src={require('./plus_image_button.png')} /></Link>
                </div>
                {/* List of goals */}
                {this.saveRenderGoals()}
                <div>
                </div>
                <hr />
                {/* My recest checkins '+'(Add) button on the same line */}
                <div>
                    <h1>My recent checkins</h1>
                    <img  alt="plus-icon" onClick={() => this.setState({ writingCheckIn: !this.state.writingCheckIn })} src={require('./plus_image_button.png')} />
                    {this.state.writingCheckIn ? <NewCheckIn handleSubmit={(text) => this.setState({ recentCheckIns: [{description: text}, ...this.state.recentCheckIns], writingCheckIn: false })} /> : null }
                </div>
                {/* List of checkins */}
                {this.saveRenderCheckins()}
                <div>
                </div>
            </div>
        )
    }
    
}

export default connect(
    state => ({ user: state.user})
)(ProfilePage);