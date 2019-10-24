import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserPage extends Component {
    
  state = {
    issue: {
        id: '',
        issues: ''
    }
}

  componentDidMount(id) {
    // this.props.dispatch({type: 'GET_Q', payload: this.props.match.params.id });
//     {this.props.reduxStore.allData.questions.map((movieInfo) => {
//       this.setState({
//           editInfo: {
//               id: movieInfo.issues_id,
//           }
//       }) // end setState
//   })
// }
    this.props.dispatch({ type: 'GET_DATA' });
}


handleNameChange = event => {
  console.log('event happended', event.target.value)
  this.setState({
    issue: {
          ...this.state.issues,
          issues: event.target.value,
      }
  });
}

addNewIssue = event => {
  event.preventDefault();
  console.log('btn is getting click', this.state.issue)
  this.props.dispatch({ type: 'POST_ISSUE', payload: this.state.issue })
  this.setState({
    issue: {
          id: this.state.issue.issues_id + 1,
          issues: '',
      }
  });
}

removeIssue = (id) => {
  // event.preventDefault();
  console.log(id);

  this.props.dispatch({
      type: 'DEL_DATA',
      payload: id
  });
}

editIssue = (id) => {
  console.log('edit btn click', this.props.match.params.id, id)
  this.props.dispatch({type: 'GET_Q', payload: id });

  this.props.history.push(`/Edit/${id}`)
}

  render(props){
    // const UserPage = props;
    return(
  <>
    <h1 id="welcome">
      { this.props.user.username }
    </h1>
                    <input type='text' value={this.state.issue.issues} onChange={this.handleNameChange} />
                    <button onClick={this.addNewIssue}>Add New Issue</button>
      <table>
        <thead>
          <tr>
            <th>

            </th>
          </tr>
        </thead>
    <tbody>
          {this.props.reduxStore.allData.data.map((item) =>(
                <tr key={item.id}>
                <td>{item.issues}</td>
                <td>
                <button  onClick={()=> {this.editIssue(item.id)}}>Edit</button>
                <button  onClick={()=> {this.removeIssue(item.id)}}>Delete</button>
                </td>
                </tr>
               ))}
            </tbody>
            </table>
    {/* <LogOutButton className="log-in" /> */}
  </>

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
