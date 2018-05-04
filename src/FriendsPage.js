import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMe } from './actions/fetch';
import { updateUserInfo } from './actions/dispatch';
import FriendsList from './FriendsList';

class FriendsPage extends Component{
    constructor(props){
        super(props);
        this.state = {

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

    render() {
        let { user } = this.props;
        // console.log(user)
        return (
            <div>
                <FriendsList user={user}/>
            </div>
        )
    }


}

export default connect(
    state => ({ user: state.user})
)(FriendsPage);