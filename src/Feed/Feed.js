import React from 'react';
import { connect } from 'react-redux';
import { arraysOfObjAreEqual } from '../lib/arraysOfObjAreEqual';
import { fetchFriends } from '../actions/fetch';
import CheckIn from './CheckIn';


class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            friends_checkins: this.props.friends
        }
    }

    componentDidMount() {
        fetchFriends(this.props.dispatch)
    }

    componentDidUpdate() {
        this.fetchCheckIns()
    }

    fetchCheckIns() {
        let { friends_checkins } = this.state;
        return fetch('http://localhost:5000/feed', {
            method: 'POST',
            body: JSON.stringify(this.props.friends)
        })
        .then( res => res.json())
        .then( checkins => {
            if (!arraysOfObjAreEqual(friends_checkins, checkins)) {
                this.setState({friends_checkins: checkins}) 
            }
        })        
    }

    render() {
        let { friends_checkins } = this.state;
        return(
            <div>
                {friends_checkins.map( (checkin, i) => <CheckIn key={i} checkin={checkin}/>)}
            </div>
        )
    }
}

export default connect(
    state => ({ friends: state.friends})
)(Feed);