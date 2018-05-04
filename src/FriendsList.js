import React from 'react';
import { fetchFriendList } from './actions/fetch';
import {Link} from 'react-router-dom';
import Friend from './Friend';

class FriendsList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            search:''
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
            <form className="friend-form" >
                <input type="text" placeholder="Add other users by email..." name="search" id="searchTerm" onChange={(event) => this.setState({ search:event.target.value })}/>
                <i className="fas fa-search-plus fa-2x"></i>
            </form>
                { 
                    friends.map( (friend,i) => <Link key={friend.userid} to={`/main/friends/${friend.userid}`}><Friend  friend={friend}/></Link>) 
                } 
            </div>
        )
    }
}


export default FriendsList;