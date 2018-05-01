import React, {Component} from 'react';

class LoginPage extends Component {
    constructor(props ){
        super(props);
        this.state = {
        email:'',
        password:''
        }
       }

handleSubmit = event => {
    event.preventDefault();
    }

handleClick = e => {
    let baseUrl = 'http://localhost:5000/login'
    let payload = {
        'email': this.state.email,
        'password': this.state.password
    }
    fetch(baseUrl, {
        body: JSON.stringify(payload),
        method: 'POST'
    }).then(res => console.log('response',res))
    .catch(error => {
        console.log(error);
      });
}

render() {

        return(
    <div className="loginpage-container">        
        <h2 className="login-header">Log in</h2>
        <form onSubmit={this.handleSubmit} className="login-container">
            <p><input type="email" placeholder="Email" 
            onChange = {(event) => this.setState({email:event.target.value})}/></p>
            <p><input type="password" placeholder="Password" 
            onChange = {(event) => this.setState({password:event.target.value})}/></p>
            <p><input type="submit" value="Log in" 
            onClick={(event) => this.handleClick(event)}/></p>
            <p><button>Register</button></p>
        </form>
    </div>
    )
}
}

export default LoginPage; 