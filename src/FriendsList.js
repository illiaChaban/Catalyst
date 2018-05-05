import React from 'react';
import { fetchFriendList } from './actions/fetch';
import {Link} from 'react-router-dom';
import Friend from './Friend';

class FriendsList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            search:'',
            usersToShow: [],
            showingUsers: false,
        }
    }

    componentDidUpdate(prevProps){
        if( prevProps !== this.props) {
            fetchFriendList(this.props.user.userid)
            .then(friends => {
                // console.log(friends)
                this.setState({friends})
            })
        }
    }

    handleSubmit = () => {
        let {search} = this.state;
        
        let url = 'http://localhost:5000/searchFriends';
        let post = {
            method: 'POST',
            body: search

        };
        fetch(url, post)
        .then(res => res.json())
        // .then(users => console.log(users))
        .then( users => {
            // console.log(users)
            this.setState({usersToShow: users, showingUsers: true})
        })
    }

    render() {
        let { friends, showingUsers, usersToShow } = this.state;

        return(
            <div className="friends-container">
            <form className="friend-form" >
                <input type="text" placeholder="Enter username..." onChange={(event) => this.setState({ search:event.target.value })}/>
                <i onClick={this.handleSubmit} className="fas fa-search-plus fa-2x"></i>
            </form>
                {   
                    (
                        showingUsers ? usersToShow: friends
                    ).map( (friend,i) => <Link key={friend.userid} to={`/main/friends/${friend.userid}`}><Friend  friend={friend}/></Link>) 
                } 
            </div>
        )
    }
}


export default FriendsList;