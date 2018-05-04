import React from 'react';
import { connect } from 'react-redux';
import ProfileGoal from './ProfileGoal';
import { fetchGoals } from './actions/fetch';

class ProfileGoals extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            goals: []
        }
    }

    componentDidUpdate(prevProps){
        if( prevProps !== this.props) {
            fetchGoals(this.props.user)
            .then( goals => {
                this.setState({goals})
            })
        }
    }

    render() {
        // console.log('rendering')
        // console.log(this.state.goals)
        let { goals } = this.state;
        return(
            <div className="profile-goals-part">
                {goals && goals.map( (goal,i) => <ProfileGoal key={i} goal={goal}/>) }
            </div>
        )
    }
}


export default ProfileGoals;
// export default connect(
//     state => ({})
// )(ProfileGoals);