import React from 'react';
import { fetchFriendList } from '../actions/fetch';
import {Link} from 'react-router-dom';
import Friend from './Friend';


let SearchSign = () =>
    <div className='sign'>
        Search results:
    </div>

let YouFollowSign = () => 
    <div className='sign'>
        You are following:
    </div>

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
                this.setState({friends})
            })
        }
    }

    handleSubmit = () => {
        let {search} = this.state;
        
        let url = 'http://localhost:5000/api/searchFriends';
        let post = {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: search

        };
        fetch(url, post)
        .then(res => res.json())
        .then( users => {
            this.setState({usersToShow: users, showingUsers: true})
        })
    }

    render() {
        let { friends, showingUsers, usersToShow } = this.state;

        let EnterHandler = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.handleSubmit()
            }
        }

        return(
            <div className="friends-container">
                <form className="friend-form" >
                    <input 
                        className='add-padding'
                        type="text" 
                        placeholder="Search for a friend..." 
                        onChange={(event) => this.setState({ search:event.target.value })}
                        onKeyPress={EnterHandler}
                    />
                    <i onClick={this.handleSubmit} className="fas fa-search-plus fa-2x"></i>
                </form>
                { showingUsers ? <SearchSign/> : <YouFollowSign/>}
                {   
                    (showingUsers ? usersToShow: friends)
                    .map( (friend,i) => 
                        <Link key={friend.userid} 
                              to={`/main/friends/${friend.userid}`}>
                              <Friend  friend={friend}/>
                        </Link>) 
                } 
            </div>
        )
    }
}



export default FriendsList;