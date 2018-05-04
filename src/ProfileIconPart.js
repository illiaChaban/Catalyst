import React from 'react';
// import { connect } from 'react-redux';
import { fetchUser } from './actions/fetch';
import ProfileIcon from './ProfileIcon';

class ProfileIconPart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: ''
        }
    }

    componentDidUpdate(prevProps){
        if( prevProps !== this.props) {
            fetchUser(this.props.userId)
            .then( user => {
                this.setState({user})
            })
        }
    }

    render() {
        let { user } = this.state;
        return(
            <div className="profile-icon-part">
                {user ? 
                <ProfileIcon user={user}/> : 
                <ProfileIcon user={this.props.me}/>}
            </div>
        )
    }
}

export default ProfileIconPart;