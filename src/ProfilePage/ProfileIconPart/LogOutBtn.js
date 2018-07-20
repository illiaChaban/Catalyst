import React from 'react';
import { Redirect } from 'react-router-dom'

class LogOutBtn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            logOut: false,
        }
    }

    render() {
        return (
            <div className='add-friend'>
                <button onClick={()=> {
                    localStorage.jwt = '';
                    this.setState({logOut: true})
                }}>Log Out</button>
                {this.state.logOut && <Redirect to='/'/>}
            </div>
        )
    }
}

export default LogOutBtn;