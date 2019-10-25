import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Icon, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Menu.css'
// import LogOutButton from '../LogOutButton/LogOutButton';


class MenuItem extends Component {

  state = {
    hidden: false,
    animation: 'overlay',

}

  render () {
    return (
        <div className="navBack">
            <div className="sidebar">
        <Sidebar
            as={Menu}
            // animation={animation}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => this.setState({hidden: false})}
            vertical
            visible={this.state.hidden}
            width='thin' 
        >
            <Link to="/home">
                <Menu.Item as='a'>
                <Icon name='home' color='orange' />
                Home
                {/* {this.props.reduxState.user.id ? 'Edit' : 'Admin Login'} */}
                </Menu.Item>
            </Link>
            <Link to ="/UserPage">
            <Menu.Item as='a'>
                <Icon name='edit' color='green'/>
            {this.props.reduxState.user.id ? 'Edit' : 'Admin Login'}
            {/* <Icon name='sign-in' color='green'/> */}
            </Menu.Item>
            </Link>
            {/* Show the link to the info page and the logout button if the user is logged in */}
      {this.props.reduxState.user.id && (
        <>
          <Link  to="/info">
          <Menu.Item as='a'>
          <Icon name='info' color='blue' />
            Info Page
            </Menu.Item>
          </Link>
          <Link to="/home">
                    <Menu.Item as='a' onClick={() => this.props.dispatch({ type: 'LOGOUT' })} >
                        <Icon name='log out' color='purple'/>
                        Logout
                    </Menu.Item>
                </Link>
        </>
      )}
            </Sidebar>
            </div>
            <div className='fp-panel-main'>
            <Sidebar.Pusher dimmed={this.state.hidden}>
                <Segment basic textAlign="left">
                    <Link to="/home">
                        {/* <Header color="black" as='h2'>Car Problems?</Header> */}
                    </Link>
                    <Button onClick={()=>{this.setState({hidden: true})}}>
                        {/* Menu */}
                        <Icon name="sidebar" color='blue'/>
                        Menu
                    </Button>
                </Segment>
            </Sidebar.Pusher>

            </div>
            </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(MenuItem));
