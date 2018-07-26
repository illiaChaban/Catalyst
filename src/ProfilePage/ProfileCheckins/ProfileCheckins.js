import React from 'react';
import ProfileCheckin from './ProfileCheckin';
import SelectGoal from './SelectGoal';
import { fetchCheckins } from '../../actions/fetch';
import SubmitBtnCheckIn from './SubmitBtnCheckIn';
import InputCheckIn from './InputCheckIn';
import CheckinTitle from './CheckinTitle';


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
            console.log('##### GETTING PROFILE CHECKINS')
            console.log( 'userId (friend)', userId)
            console.log( 'me (me)', me)
            // checking if it's user's profile or his friend's
            let checkins = userId ? 
                await fetchCheckins(userId) :
                await fetchCheckins(me.userid);
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
            fetch('http://localhost:5000/api/postCheckin', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    description: this.state.newCheckin,
                    goalid: this.state.newChkGoalId,
                    image: ''
                })
            })
            .then( async () => {
                //update checkins from backend
                let checkins;
                userId ? 
                checkins = await fetchCheckins(userId) :
                checkins = await fetchCheckins(me.userid);
                this.setState({checkins})
            })
        }

        let resetNewCheckin = () => {
            this.setState({newCheckin: ''})
        }

        let updateNewChkGoalId = (event) => {
            this.setState({newChkGoalId: event.target.value})
        }

        let submitHandlers = { postCheckin, toggleInput, resetNewCheckin };

        return(
            <div className='profile-goals-part'>
                <CheckinTitle userId={userId} me={me} toggleInput={toggleInput}/>
                {writingNewCheckin &&
                    <div className='add-checkin'> 
                        <InputCheckIn handler={updateNewCheckin} />
                        <SelectGoal handler={updateNewChkGoalId} />
                        <SubmitBtnCheckIn handlers={submitHandlers} />
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