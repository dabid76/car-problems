import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon} from 'semantic-ui-react';
import swal from 'sweetalert';


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

  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    // this.props.dispatch({ type: 'DELETE_COMMENT', payload:  {id: this.props.item.id , issues_id: this.props.item.issues_id}})

    if (willDelete) {
      this.props.dispatch({
        type: 'DEL_DATA',
        payload: id
    });

      swal("Poof! Your file has been deleted!", {
        icon: "success",
        
      });
    } else {
      swal("Your file is safe!");
    }
  });

  // this.props.dispatch({
  //     type: 'DEL_DATA',
  //     payload: id
  // });
}

editIssue = (id) => {
  console.log('edit btn click', id, this.props.reduxStore.allData.data[1].issues)
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
    <form>
    <p>
      <label>Add New Issue</label>
      {/* <br/> */}
                    <input type='text' placeholder="New common issue?" value={this.state.issue.issues} onChange={this.handleNameChange} />
                    </p>

                    <Button onClick={this.addNewIssue}><Icon name='plus' color='green'/>New Issue</Button>
                    </form>
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
                <Button.Group>

<Button icon onClick={()=> {this.editIssue(item.id)}}>
    <Icon name='edit'color='green'/>Edit
</Button>
<Button.Or />

<Button onClick={()=> {this.removeIssue(item.id)}}>
    <Icon name='trash' color='red'/>Delete
</Button>
</Button.Group>
                {/* <button  onClick={()=> {this.editIssue(item.id)}}>Edit</button>
                <button  onClick={()=> {this.removeIssue(item.id)}}>Delete</button> */}
                </td>
                </tr>
               ))}
            </tbody>
            </table>
    {/* <LogOutButton className="log-in" /> */}
    {/* <p>{JSON.stringify( this.props.reduxStore.allData.data[1].issues)}</p> */}

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
