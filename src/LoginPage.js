import React from 'react';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
        username:'',
        password:''
        }
       }

handleSubmit = event => {
    event.preventDefault();
    }

    render() {

        return(
    <div className="loginpage-container">        
        <h2 className="login-header">Log in</h2>
        <form onSubmit={this.handleSubmit} className="login-container">
            <p><input type="email" placeholder="Email" onChange = {(event,newValue) => this.setState({username:newValue})}/></p>
            <p><input type="password" placeholder="Password" onChange = {(event,newValue) => this.setState({password:newValue})}/></p>
            <p><input type="submit" value="Log in" onClick={(event) => this.handleClick(event)}/></p>
            <p><button >Register</button></p>
        </form>
    </div>
    )
}
}

export default LoginPage; 