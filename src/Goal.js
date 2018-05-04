import React, { Component } from 'react';

class Goal extends Component {
    constructor(props){
        super(props);
        this.state = {
            AllGoals: ["avi"]
        }
    }


    // saveRenderGoals = (goals) => {
    //     if(this.state.AllGoals.length >= 0) {
    //         return this.state.AllGoals.map((goal, i) => {
    //         return <li key={i} >{ goal }</li>
    //         })
    //     }
    // }

    saveRenderGoals(goals) {
        if(this.state.AllGoals.length >= 0) {
            console.log("blablabl")
            return this.state.AllGoals.map((goal, i) => {
            return <li key={i} >{ goal }</li>
            })
        }
    }



    render() {
        return (
            <div>
                <h1>Goals name</h1>
                <p>goal name</p>
                <p>description</p>
                <p>deadline</p>
                <p>punishment</p>
                {this.saveRenderGoals()}
            </div>
        )

        
    }

}



export default Goal;