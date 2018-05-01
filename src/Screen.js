import React from 'react';
import {connect} from 'react-redux';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import LoginPage from './LoginPage'

let DumbHomepage = () =>
<div>Dumb Homepage</div>

let ScreenDumb = () => {   
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={DumbHomepage} />
                    <Route path="/login" exact component={LoginPage} />
                </Switch>
            </Router>
        </div>
    )
 }


// let mapStateToProps = (state) => {
//     return {state: state}
//     }
  
// let mapDispatchToProps = (dispatch) => {
//     return {dispatch: dispatch}
//   };
  
// let Screen = connect(
//     mapStateToProps,
//     mapDispatchToProps
//     )(ScreenDumb);

let Screen = connect(
    state => ({state})
)(ScreenDumb)

export default Screen;