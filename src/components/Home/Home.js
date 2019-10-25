import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'


class Home extends Component {

    carPoblems(id) {
        console.log('pic getting click')
        this.props.history.push(`/WhatsWrong`)
        // this.props.dispatch({ type: 'GET_DETAILS', payload: id });
    }


    render() {
      
    return (

        <div className="car">
            <div className="title">
            <Header as='h2'>
    <Icon name='car' />
    <Header.Content>Car Problems?</Header.Content>
    <Icon name='car' />
  </Header>
  </div>
            <h2>Click on a image to start</h2>
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