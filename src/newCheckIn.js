import React, { Component } from 'react';

class NewCheckIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            checkInText: '',
            checkinImage: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.checkInText, this.state.checkinImage);
    }

    

    render() {

        let handleSubmitCheckins = () => {
            console.log('blablabla')
            let url = 'http://localhost:5000/checkins';
            let post = {
                method: 'POST',
                body: JSON.stringify({
                    
                    checkInText: this.state.checkInText,
                    checkinImage: this.state.checkinImage
                })
    
            };
    
            fetch(url, post)
            .then(data => console.log(data))
        }


        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add new checkin</h1>
                <input type="text" onChange={(event) => this.setState({ checkInText: event.target.value })} />
                <input type="file" onChange={(event) => {
                    let file = event.target.files[0];
                    let url = URL.createObjectURL(file);
                    // console.log(file) 
                    this.setState({ checkinImage: url }) }} />
                    
                {/* {console.log(this.state.checkinImage)} */}
                <img alt="checkin-img" src={this.state.image} />
            </form>
        )
    }
    
}
    

export default NewCheckIn;