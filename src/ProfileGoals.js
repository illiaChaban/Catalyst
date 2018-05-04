import React from 'react';
import ProfileGoal from './ProfileGoal';
import { fetchGoals } from './actions/fetch';

class ProfileGoals extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            goals: []
        }
    }

    async componentDidUpdate(prevProps){
        if( prevProps !== this.props) {
            let { me, userId } = this.props
            console.log(me, userId)
            let goals;
            // checking if it's user's profile or his friend's
            userId ? 
            goals = await fetchGoals(userId) :
            goals = await fetchGoals(me.userid);
            this.setState({goals})
        }
    }

    render() {
        // console.log('rendering')
        // console.log(this.props)
        let { goals } = this.state;
        return(
            <div className="profile-goals-part">
                <div className='profile-title'> My Goals: </div>
                {goals.length && goals.map( (goal,i) => <ProfileGoal key={i} goal={goal}/>) }
            </div>
        )
    }
}


export default ProfileGoals;
