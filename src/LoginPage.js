import React, {Component} from 'react';

class LoginPage extends Component {
    constructor(props ){
        super(props);
        this.state = {
        email:'',
        password:'',
        isLoggedIn: null
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
    })
    .then(res => console.log('response',res))
    .then(res => {
        if (res.token) {
        localStorage.getItem('token', "res.token")
        this.setState({isLoggedIn:true})
            if(this.state.isLoggedIn===true) {
                this.props.history.push('/')
            } else {
                return this.setState({isLoggedIn:false})
            }
        }
    })
    .catch(error => {
        console.log(error);
      });
      ///if okay then login and add web token to local storage
      //then set login to true
      //set login to true and send user to main homepage
      //if false, return failed login attempt
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
            <p><button onClick={() => this.props.history.push('/register')}>Register</button></p>
            {this.state.isLoggedIn===false ? <div>Failed Login, please try again.</div> : <div></div>}
        </form>
    </div>
    )
}
}

export default LoginPage; 