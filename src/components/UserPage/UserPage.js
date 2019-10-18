// import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
class UserPage extends Component {
  componentDidMount(id) {
    this.props.dispatch({ type: 'GET_DATA' });
    // this.props.dispatch(action);
  }

  render(props){
    // const UserPage = props;
    return(
  <div>
    <h1 id="welcome">
      { this.props.user.username }
    </h1>
    <ul>
    {/* <p>{JSON.stringify(this.props.reduxStore)}</p> */}

                {this.props.reduxStore.data.data.map(item=>{
                return <li key={item.id} value={item.id}>{item.issues}</li>    
                })}
            </ul>
    {/* <LogOutButton className="log-in" /> */}
  </div>

)}}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });

// const mapStateToProps = state => ({
//   user: state.user,
// });
const mapStateToProps = reduxStore =>{
  return {
      reduxStore,
      user: reduxStore.user
  }; // end return
}; // end mapStateToProps

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
