import React from 'react';
import ProfileCheckin from './ProfileCheckin';
import SelectGoal from './SelectGoal';

let fetchCheckins = (userId) =>
    fetch('http://localhost:5000/getMyCheckins', {
        method: 'POST',
        body: JSON.stringify(userId)
    })
    .then(res => res.json())

class ProfileCheckins extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checkins: [],
            newCheckin: '',
            writingNewCheckin: false,
            newChkGoalId: '',
        }
    }

    async componentDidUpdate(prevProps){
        if( prevProps !== this.props) {
            let { me, userId } = this.props
            let checkins;
            // checking if it's user's profile or his friend's
            userId ? 
            checkins = await fetchCheckins(userId) :
            checkins = await fetchCheckins(me.userid);
            this.setState({checkins})
        }
    }

    render() {
        let {checkins, writingNewCheckin} = this.state;
        let { me, userId } = this.props

        let toggleInput = () => {
            this.setState({writingNewCheckin: !writingNewCheckin})
        }

        let updateNewCheckin = (event) => {
            this.setState({newCheckin: event.target.value})
        }

        let postCheckin = () => {
            console.log(this.state.newCheckin, this.state.newChkGoalId)
        }

        let resetNewCheckin = () => {
            this.setState({newCheckin: ''})
        }

        let updateNewChkGoalId = (event) => {
            console.log(event.target)
            this.setState({newChkGoalId: event.target.value})
        }

        return(
            <div className='profile-goals-part'>
                <div className='profile-title'> 
                    <div>Recent Checkins: </div>
                    {
                        ( !userId || userId === me.userid.toString() ) &&
                            <i onClick={toggleInput} className="fas fa-plus-circle"></i>
                    }
                </div>
                {writingNewCheckin &&
                    <div> 
                        <input 
                            className='write-new-checkin'
                            onChange={updateNewCheckin}>
                        </input>
                        <SelectGoal handler={updateNewChkGoalId} />
                        <button
                            onClick={() => {
                                postCheckin();
                                toggleInput();
                                resetNewCheckin();
                            }}
                            >Submit
                        </button>
                    </div>
                }
                {checkins.length && checkins.map( (chk, i) => {
                    return <ProfileCheckin key={i} checkin={chk}/>
                })}
            </div>
        )
    }
}

export default ProfileCheckins;