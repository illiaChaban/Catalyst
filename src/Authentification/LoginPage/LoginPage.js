import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: null,
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
            .then(res => {
                if (res.status === 200) {
                    res.text().then(res => {
                        localStorage.setItem('jwt', res)
                        this.setState({ isLoggedIn: true })
                        this.props.history.push('/main/feed')
                    })
                } else {
                    this.setState({ isLoggedIn: false })
                }
            })
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        return (
            <div className="loginpage-master-container">
                <div className="loginpage-form-container">
                    <ul>
                        <li>MAKE GOALS.</li>
                        <li>DO WORK.</li>
                        <li>OR GET PUNISHED.</li>
                    </ul>
                    <form onSubmit={this.handleSubmit} className="login-container">
                        <ul>
                            <li><h2 className="login-header">SIGN IN</h2></li>
                            <li><input type="email" placeholder="Email"
                                onChange={(event) => this.setState({ email: event.target.value })} /></li>
                            <li><input type="password" placeholder="Password"
                                onChange={(event) => this.setState({ password: event.target.value })} /></li>
                            <li><button type="submit" 
                                onClick={(event) => this.handleClick(event)}>Log in</button>
                                <button onClick={() => this.props.history.push('/register')}>Register</button></li>
                                {this.state.isLoggedIn === false ? <div><p>Failed Login, please try again.</p></div> : <div></div>}
                        </ul>
                    </form>
                </div>
                <div className="loginpage-logo-container">
                    <img className="logo" alt="catalyst" src="http://i.imgur.com/ewWJs9l.jpg" />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({ user: state.user })
)(LoginPage); 