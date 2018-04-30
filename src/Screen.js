import React from 'react';
import {connect} from 'react-redux';


let ScreenDumb = () => {   
    return(
        <div>
            Working
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
)(ScreenDumb);

export default Screen;