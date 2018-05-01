import React, {Component} from 'react';

class RegisterPage extends Component {
    constructor(props ){
        super(props);
        this.state = {
        email:'',
        password:'',
        username:'',
        avatar:'',
        isLoggedIn: null
        }
       }

handleSubmit = event => {
    event.preventDefault();
    }

fetchOnClick = event => {
    let baseUrl = 'http://localhost:5000/register'
    let payload = {
        'email': this.state.email,
        'jwtpassword': this.state.password,
        'username': this.state.username,
        'avatar': this.state.avatar
    }
    fetch(baseUrl, {
        body: JSON.stringify(payload),
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(res => console.log('response',res))
    .catch(error => {
        console.log(error);
      });
}

render() {

        return(
    <div className="loginpage-container">        
        <h2 className="login-header">Register</h2>
        <form onSubmit={this.handleSubmit} className="login-container">
            <p><input type="text" placeholder="Username" 
            onChange = {(event) => this.setState({username:event.target.value})}/></p>
            <p><input type="email" placeholder="Email" 
            onChange = {(event) => this.setState({email:event.target.value})}/></p>
            <p><input type="password" placeholder="Password" 
            onChange = {(event) => this.setState({password:event.target.value})}/></p>
            <p><input type="text" placeholder="Image URL" 
            onChange = {(event) => this.setState({avatar:event.target.value})}/></p>
            <button
            onClick={() => this.props.history.push('/login')}>Cancel</button>
            <input type="submit" value="Submit" 
            onClick={(event) => this.fetchOnClick(event)}/>
        </form>
    </div>
    )
}
}

export default RegisterPage; 