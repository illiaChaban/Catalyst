import React from 'react';
import { connect } from 'react-redux';
import { fetchFriendList } from './actions/fetch';
import Friend from './Friend';

class FriendsList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }

    componentDidUpdate(prevProps){
        if( prevProps !== this.props) {
            fetchFriendList(this.props.user)
            .then(friends => {
                this.setState({friends})
            })
        }
    }

    render() {
        console.log('rendering')
        console.log(this.state.friends)
        let { friends } = this.state;
        return(
            <div className="friends-container">
            
                { 
                    friends.map( (friend,i) => <Friend key={i} friend={friend}/>) 
                } 
            </div>
        )
    }
}


export default FriendsList;