import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMe } from '../actions/fetch';
import { updateUserInfo } from '../actions/dispatch';
import ProfileIconPart from './ProfileIconPart/ProfileIconPart';
import ProfileGoals from './ProfileGoals/ProfileGoals';
import ProfileCheckins from './ProfileCheckins/ProfileCheckins';

class ProfilePage extends Component{
    async componentDidMount() {
        let { dispatch } = this.props;
        let response = await fetchMe();
        if (response.status === 200) {
            let user = await response.json();
            updateUserInfo({dispatch, user })
        }
    }

    render() {
        let { me, profileUserId, history } = this.props;

        return (
            <div>
                <ProfileIconPart userId={profileUserId} me={me} history={history}/>
                <ProfileGoals userId={profileUserId} me={me}/>
                <ProfileCheckins userId={profileUserId} me={me}/>
            </div>
        )
    }
}

export default connect(
    (state, props) => ({ 
        me: state.user,
        profileUserId: props.profileUserId,
        history: props.history,
    })
)(ProfilePage);
