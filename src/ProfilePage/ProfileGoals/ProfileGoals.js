import React from 'react';
import ProfileGoal from './ProfileGoal';
import { fetchGoals } from '../../actions/fetch';
import { Link } from 'react-router-dom';

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
            let goals;
            // checking if it's user's profile or his friend's
            userId ? 
            goals = await fetchGoals(userId) :
            goals = await fetchGoals(me.userid);
            // console.log(goals)
            this.setState({goals})
        }
    }

    render() {
        let { goals } = this.state;
        let { me, userId } = this.props
        return(
            <div className="profile-goals-part">
                <div className='profile-title'>
                    <div>My Goals:</div>
                    {
                        ( !userId || userId === me.userid.toString() ) &&
                        <Link className='white' to='/main/create-goal'>
                            <i className="fas fa-plus-circle"></i> 
                        </Link>
                        
                    }
                </div>
                {goals.length && goals.map( (goal,i) => <ProfileGoal key={i} goal={goal}/>) }
            </div>
        )
    }
}


export default ProfileGoals;
