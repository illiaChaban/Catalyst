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

    handleSubmit = () => {
        let {search} = this.state;
        
        let url = 'http://localhost:5000/addFriend';
        let post = {
            method: 'POST',
            body: JSON.stringify({
                userid: this.props.user.userid,
                search: search,
            })

        };
        fetch(url, post)
        .then(data => console.log(data))
    }

    render() {
        // console.log('rendering')
        // console.log(this.state.friends)
        let { friends } = this.state;
        return(
            <div className="friends-container">
            <form className="friend-form" >
                <input type="text" placeholder="Enter username..." onChange={(event) => this.setState({ search:event.target.value })}/>
                <i onClick={this.handleSubmit} className="fas fa-search-plus fa-2x"></i>
            </form>
                { 
                    friends.map( (friend,i) => <Link key={friend.userid} to={`/main/friends/${friend.userid}`}><Friend  friend={friend}/></Link>) 
                } 
            </div>
        )
    }
}


export default FriendsList;