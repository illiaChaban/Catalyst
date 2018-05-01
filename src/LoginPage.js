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
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    // .then(res => console.log('response',res))
    .then(res => {
        if (res.status===200) {
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
            <input type="submit" value="Log in" 
            onClick={(event) => this.handleClick(event)}/>
            <button onClick={() => this.props.history.push('/register')}>Register</button>
            {this.state.isLoggedIn===false ? <div><p>Failed Login, please try again.</p></div> : <div></div>}
        </form>
    </div>
    )
}
}

export default LoginPage; 