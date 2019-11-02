import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react'

class Home extends Component {

    carPoblems(id) {
        console.log('pic getting click')
        this.props.history.push(`/WhatsWrong`)
    }

    render() {
    return (
        <div className="car">
            <div className="title">
            <Header as='h1'>
                <Header.Content>Car Problems?</Header.Content>
            </Header>
            </div>
            <h2>Click the car to start</h2>
                <Icon name='car'  size='massive' onClick={() => this.carPoblems()}/>
            {/* <img src="problems.jpg" alt="car" className="car" onClick={() => this.carPoblems()}/> */}
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