import React from 'react';
import { fetchFriendList } from './actions/fetch';
import {Link} from 'react-router-dom';
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
        // console.log('rendering')
        // console.log(this.state.friends)
        let { friends } = this.state;
        return(
            <div className="friends-container">
            
                { 
                    friends.map( (friend,i) => <Link key={friend.userid} to={`/main/friends/${friend.userid}`}><Friend  friend={friend}/></Link>) 
                } 
            </div>
        )
    }
}


export default FriendsList;