import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMe } from './actions/fetch';
import { updateUserInfo } from './actions/dispatch';
import updateDate from './lib/updateDate';
import punishments from './lib/punishments';
// import DeadlineDate from './DeadlineDate';

let BtnGeneratePunishment = ({handler}) => 
    <button 
        onClick={handler}
        className='btn-generate-punishment' 
        >Generate Punishment
    </button>
let getRandomPunishment = (punishmentsArr) => {
    let randomNum = Math.round( Math.random()* (punishmentsArr.length - 1));
    return punishmentsArr[randomNum];
}


class CreateGoalPage extends Component  {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            punishment: '',
            month: '',
            day: '',
            year: ''
        }
    }

    async componentDidMount() {
        let { dispatch } = this.props;
        let response = await fetchMe();

        if (response.status === 200) {
            let user = await response.json();

            updateUserInfo({dispatch, user })
        }
    }

    handleSubmit = () => {
        let {title, description, punishment, month, day, year} = this.state;
        let deadline = `${year}-${updateDate(month)}-${updateDate(day)}`
        // console.log(deadline)

        let url = 'http://localhost:5000/goals';
        let post = {
            method: 'POST',
            body: JSON.stringify({
                userid: this.props.user.userid,
                title: title,
                description: description,
                deadline,
                punishment: punishment
            })

        };

        fetch(url, post)
        this.props.history.push('/main/profile-page')      
    }

    render (){
        
        let generatePunishmentHandler = () => {
            let punishment = getRandomPunishment(punishments);
            document.getElementById('punishment-input').value = punishment;
            this.setState({punishment})
        }

        return (
            <div className="create-goal-container">
            <div>
                <li><h1>Create Goal</h1></li>
                <li> 
                    <h3>Title:</h3>
                    <input 
                        className='goal-input'
                        onChange={(event) => this.setState({ title:event.target.value }) } 
                        type="text" required/>
                </li>
                
                <li>
                    <h3>Description:</h3>
                    <textarea
                        className='goal-input'                        
                        onChange={(event) => this.setState({ description:event.target.value }) } 
                        type="text" required>
                    </textarea>
                    </li>
                <li>
                    <h3>Deadline:</h3>
                    <div className="date">
                        <input 
                            className='date-input'
                            placeholder='mm'
                            onChange={(event) => this.setState({ month:event.target.value }) } 
                            type='number' min="1" max="12" required /> 
                        <label>/</label>
                        <input 
                            className='date-input'                    
                            placeholder='dd'
                            onChange={(event) => this.setState({ day:event.target.value }) } 
                            type='number' min="1" max="31" required />
                        <label>/</label>
                        <input 
                            className='date-input'                        
                            placeholder='yyyy'
                            onChange={(event) => this.setState({ year:event.target.value }) } 
                            type='number' min="2018" max="2200" required /> 
                    </div>
                    </li>
                    <li>
                        <h3>Punishment:</h3>
                        <textarea
                            id='punishment-input' 
                            className='goal-input'                        
                            onChange={(event) => this.setState({ punishment:event.target.value }) } 
                            type="text" required>
                        </textarea>
                    </li>
                    <div className='create-goal-btns'>
                        <BtnGeneratePunishment handler={generatePunishmentHandler}/>                
                        <button onClick={this.handleSubmit}>Submit Goal</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default connect(
    state => ({ user: state.user})
)(CreateGoalPage);