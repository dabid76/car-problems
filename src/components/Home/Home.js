import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {

    carPoblems(id) {
        console.log('pic getting click')
        this.props.history.push(`/WhatsWrong`)
        // this.props.dispatch({ type: 'GET_DETAILS', payload: id });
    }


    render() {
      
    return (

        <div className="car">
            {/* <h1>Image</h1> */}
            <h1>click on a image to start</h1>
            <img src="problems.jpg" alt="car" className="car" onClick={() => this.carPoblems()}/>
        </div> 
  
        );
    }
  }
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(Home);