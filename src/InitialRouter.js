import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserInfo } from './actions/dispatch';
import { fetchMe } from './actions/fetch';


class InitialRouterDumb extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loggedIn: null
        }
    }

    componentDidMount() {
        this.getUserInfo();
    }

    async getUserInfo() {
        let { dispatch } = this.props;    
        if (localStorage.jwt) {
            let response = await fetchMe();

            if (response.status === 200) {
                let user = await response.json();

                updateUserInfo({dispatch, user })
                this.setState({loggedIn: true})
            } else {
                this.setState({loggedIn: false})
            }
        } else { this.setState({loggedIn: false})}
    }

    render() {
        let { loggedIn } = this.state;
        return (
            <div>
                {loggedIn === true && <Redirect to="/main/feed"/>} 
                {loggedIn === false && <Redirect to='/login'/>} 
            </div>
        )
    }
}


let InitialRouter = connect(
    state => ({ username: state.user.username})
)(InitialRouterDumb)

export default InitialRouter;