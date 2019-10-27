import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Icon} from 'semantic-ui-react';
import swal from 'sweetalert';

class  EditItem extends Component {
  state = {
      questions: '',
      isEdit: false,
  }

  componentDidMount = () =>{
      this.setComment();
  }

  componentWillUpdate = (prevProps) => {
    if (this.props.reduxStore.allData.questions !== prevProps.reduxStore.allData.questions){
      {this.props.reduxStore.allData.questions.map((details) => {
        this.setState({
          questions: details.questions,
        })
        });       
      }   
    }
  }

  setComment = (prevProps) =>{
    console.log('id?', this.props.item.id, this.props.reduxStore.allData.data[1].issues)
    this.setState({ questions: this.props.item.questions, id: this.props.editInfo});
  }

  editComment = () =>{
    this.setState({ isEdit: !this.state.isEdit})
  }
    
  saveComment = () =>{

    if(this.props.isAdmin){
      }else{
        this.props.dispatch({type:'NEW_INFO', payload: {id: this.props.item.id , questions: this.state.questions, issues_id: this.props.item.issues_id}})
      }
    this.setComment();
    this.setState({ isEdit: !this.state.isEdit})
    }

  handleChange = (event) =>{
    console.log('happening: ', event.target.value)
    this.setState({ questions: event.target.value})
    }

  deleteComment = () =>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      })
    .then((willDelete) => {
    if (willDelete) {
      this.props.dispatch({ type: 'DELETE_COMMENT', payload:  {id: this.props.item.id , issues_id: this.props.item.issues_id}})
    swal("Poof! Your file has been deleted!", {
      icon: "success",
    });
    } else {
    swal("Your file is safe!");
    }
  });
  }
  
  render() {
    return (
      <div className="comment">
        {!this.state.isEdit ?
          <>
            <p>{this.props.item.questions}: {this.props.item.solution}</p>
            {(this.props.item.questions === this.props.reduxStore.allData.questions) ? 
          <>
          </> 
          : (this.props.reduxStore.user.admin) ?
          <>
          <Button.Group>
            <Button icon onClick = {this.editComment}>
              <Icon name='edit'color='green'/>Edit
            </Button>
          <Button.Or />

            <Button onClick = {this.deleteComment}>
              <Icon name='delete' color='red'/>Delete
            </Button>
          </Button.Group>
          </> 
          : ''
          }
          </> :
          <>
          <p>{this.props.editInfo}:</p>
            <input onChange = {(event) => this.handleChange(event)} value = {this.state.questions}></input>
              <Button onClick = {this.saveComment}><Icon name='save' color='green'/>Save</Button>
          </>
          }
      </div>
      );
    }
  }

const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default withRouter(connect(mapStateToProps)(EditItem));