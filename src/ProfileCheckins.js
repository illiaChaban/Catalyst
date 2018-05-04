import React from 'react';
import ProfileCheckin from './ProfileCheckin';

class ProfileCheckins extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checkins: []
        }
    }

    componentDidUpdate(prevProps){
        if( prevProps !== this.props) {
            fetch('http://localhost:5000/getMyCheckins', {
                method: 'POST',
                body: JSON.stringify(this.props.user)
            })
            .then(res => res.json())
            // .then(console.log)
            .then( checkins => {
                this.setState({checkins})
            })
        }
    }

    render() {
        let {checkins} = this.state;
        return(
            <div className='profile-goals-part'>
                <div className='profile-title'> Recent Checkins: </div>
                {checkins.length && checkins.map( (chk, i) => {
                    return <ProfileCheckin key={i} checkin={chk}/>
                })}
            </div>
        )
    }
}

export default ProfileCheckins;