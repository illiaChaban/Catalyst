import React from 'react';
import { Redirect } from 'react-router-dom'

class LogOutBtn extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         logOut: false,
    //     }
    // }

    state = {
        logOut: false
    }

    render() {
        return (
            <button className='main-btn'
                    onClick={()=> {
                        localStorage.jwt = '';
                        this.setState({logOut: true})
            }}>
                Log Out
                {this.state.logOut && <Redirect to='/'/>}
            </button>
        )
    }
}

export default LogOutBtn;