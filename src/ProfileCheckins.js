import React from 'react';
import ProfileCheckin from './ProfileCheckin';

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
            checkins: []
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
        let {checkins} = this.state;
        let { me, userId } = this.props
        return(
            <div className='profile-goals-part'>
                <div className='profile-title'> 
                    <div>Recent Checkins: </div>
                    {
                        ( !userId || userId === me.userid.toString() ) &&
                        <button>add</button>
                    }
                </div>
                {checkins.length && checkins.map( (chk, i) => {
                    return <ProfileCheckin key={i} checkin={chk}/>
                })}
            </div>
        )
    }
}

export default ProfileCheckins;