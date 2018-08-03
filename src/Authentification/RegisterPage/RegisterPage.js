import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import LogoContainer from '../LogoContainer';

let UseDifEmailWarning = () => 
    <div className='failed-login-sign'>This email is already in use!</div>

class RegisterPage extends Component {
    constructor(props ){
        super(props);
        this.state = {
        email:'',
        password:'',
        username:'',
        avatar:'',
        logInStatus: null
        }
       }

handleSubmit = event => {
    event.preventDefault();
    }

fetchOnClick = event => {
    let baseUrl = 'http://localhost:5000/authentication/register';
    let { email, password, username, avatar} = this.state;
    fetch(baseUrl, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            email, password, username, avatar
        })
    })
    .then(res => {
        if (res.status === 200) {
            res.text().then(res => {
                localStorage.setItem('jwt', res)
                this.setState({logInStatus: true})
            })
        } else {
            this.setState({ logInStatus: 'email was used'})
        }
    })
    .catch(console.log);
}

render() {
        let { logInStatus } = this.state;

        return(
        <div className="loginpage-master-container">
            <div className="loginpage-form-container">
                <form onSubmit={this.handleSubmit} className="login-container">
                    <ul>
                        <li><h2 className="login-header">Register</h2></li>
                        <li><input type="text" placeholder="Username" 
                            onChange = {(event) => this.setState({username:event.target.value})}/></li>
                        <li><input type="email" placeholder="Email" 
                            onChange = {(event) => this.setState({email:event.target.value})}/></li>
                        <li><input type="password" placeholder="Password" 
                            onChange = {(event) => this.setState({password:event.target.value})}/></li>
                        <li><input type="text" placeholder="Image URL" 
                            onChange = {(event) => this.setState({avatar:event.target.value})}/></li>
                        <li>
                            <button
                            onClick={() => this.props.history.push('/login')}>Cancel</button>
                            <button type="submit"
                            onClick={(event) => this.fetchOnClick(event)}>Submit</button>
                        </li>
                    </ul>
                </form>
            </div>
            {logInStatus === true && <Redirect to='/main/profile-page'/>}
            {logInStatus === 'email was used' && <UseDifEmailWarning/>}
            <LogoContainer/>
    </div>
    )
}
}

export default RegisterPage; 