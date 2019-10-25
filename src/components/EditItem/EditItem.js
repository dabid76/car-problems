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

    // shouldComponentUpdate(){
    //     this.setComment();
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.item.questions !== prevProps.item.questions){
    //         {this.props.item.questions.map((movieInfo) => {
    //             this.setState({
    //                 editInfo: {
    //                     questions: movieInfo.questions,
    //                 }
    //             }) // end setState
    //         })
    //     }
    //         // this.updateCurrent();  

    //       } 
    //      }
    
    // updateCurrent = () =>{
    //     {this.props.reduxStore.allData.questions.map((movieInfo) => {
    //         this.setState({
    //             editInfo: {
    //                 id: movieInfo.questions,
    //             }
    //         }) // end setState
    //     })
    // }
    // }

    setComment = (prevProps) =>{
        console.log('id?', this.props.item.id, this.props.reduxStore.allData.data[1].issues)
        this.setState({ questions: this.props.item.questions, id: this.props.editInfo});
    }
    editComment = () =>{
        this.setState({ isEdit: !this.state.isEdit})
    }
    saveComment = () =>{
        // this.props.history.push(`/Edit/${this.props.match.params.id}`)

        if(this.props.isAdmin){
            // this.props.dispatch({type:'NEW_INFO', payload: {id: this.props.item.id , questions: this.state.questions}})

        }else{
            this.props.dispatch({type:'NEW_INFO', payload: {id: this.props.item.id , questions: this.state.questions, issues_id: this.props.item.issues_id}})
            // this.props.history.push(`/Edit/${this.props.match.params.id}`)
// console.log('id?', this.props.item.issues_id)
        }
        // this.props.history.push(`/Edit/${this.props.match.params.id}`)
        this.setComment();
        this.setState({ isEdit: !this.state.isEdit})
        // this.setState({ questions: ''})

    }
    handleChange = (event) =>{
        console.log('happening: ', event.target.value)
        this.setState({ questions: event.target.value})
        // this.editComment(event);

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
            // this.props.dispatch({ type: 'DELETE_COMMENT', payload:  {id: this.props.item.id , issues_id: this.props.item.issues_id}})

            if (willDelete) {
                this.props.dispatch({ type: 'DELETE_COMMENT', payload:  {id: this.props.item.id , issues_id: this.props.item.issues_id}})

              swal("Poof! Your file has been deleted!", {
                icon: "success",
                
              });
            } else {
              swal("Your file is safe!");
            }
          });
        // console.log('btn click', this.props.item.id)
        // if(window.confirm('Are you sure you want to delete this question?')){
            // this.props.dispatch({ type: 'DELETE_COMMENT', payload:  {id: this.props.item.id , issues_id: this.props.item.issues_id}})
        }
    // }
    render() {
      return (
        <div className="comment">
            {!this.state.isEdit ?
            <>
            <p>{this.props.item.questions}: {this.props.item.solution}</p>
            {(this.props.item.questions === this.props.reduxStore.allData.questions) ? 
            <>
            {/* <Button icon onClick = {this.editComment}>
                <Icon name='edit'/>Edit1
            </Button>
            <button onClick = {this.deleteComment}>
                <Icon name='delete'/>Delete1
            </button> */}
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