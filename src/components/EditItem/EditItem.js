  
// import React, { Component } from 'react';
// import { connect } from 'react-redux';



// class EditItem extends Component {

//     //     constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         editInfo: {
//     //             // id: '',
//     //             questions: '',
//     //             // solution: ''
//     //         }
//     //     }
//     // }


//         state = {
//         questions: '',
//         // isEdit: false,
//     }

//     componentDidMount(){
//         this.infoDetails();
//     }

//         componentWillReceiveProps(){
//         this.infoDetails();

//     }

//     infoDetails = () => {
//         console.log('questions and solutions1: ', this.props.editInfo)

//             this.setState({
//                 editInfo: {
//                     // id: this.props.item.id,
//                     questions: this.state.questions,
//                     solution: this.state.solution,
//                 }
//             }) // end setState
//         }

//     // saveBtn = (id) => {
//     //     console.log('is it working?', this.state.editInfo)
//     //     this.props.dispatch({type:'NEW_INFO', payload: this.state.editInfo})
//     //     this.props.history.push(`/UserPage`);
//     // } // end saveBtn

//     handleChange = (event, propertyName) => {
//         console.log('in handleChange', event.target.value)
//         // this.props.dispatch({type:'EDIT_INFO', payload: this.state.editInfo})

//         this.setState({
//             editInfo:{
//               ...this.state.editInfo,
//              [propertyName]: event.target.value,
//             }
//         }) // end setState
        
//     } // end handleChange

//     // handleNameChange = (event, propertyName) => {
//     //     console.log('in handleNameChange', event.target.value)

//     //     this.setState({
//     //         editInfo:{
//     //           ...this.state.editInfo,
//     //          [propertyName]: event.target.value,
//     //         }
//     //     }) // end setState
//     // } // end handleChange

//     // addNewQA = event => {
//     //     event.preventDefault();
//     //     console.log('btn is getting click', this.state.editInfo)
//     //     event.preventDefault();
//     //     this.props.dispatch({ type: 'POST_NEW', payload: this.state.editInfo })
//     //     // this.setState({
//     //     //     editInfo: {
//     //     //         questions: '',
//     //     //         solution: ''
//     //     //     }
//     //     // });
//     //   }

//     render() {
//         return (
//             <>  
//       {/* <p>{JSON.stringify(this.props.editInfo)}</p> */}
//       <p>{JSON.stringify(this.props.item.questions)}</p>
//       <p>{JSON.stringify(this.props.item.solution)}</p>

//             {/* <input type='text' placeholder="Question"  onChange={this.handleNameChange} />
//             <input type='text' placeholder="Solution"  onChange={this.handleNameChange} />
            
//             <button onClick={this.addNewQA}>Add</button> */}
//             <br/>
//             <textarea defaultValue={this.props.item.questions} onChange = {(event) => this.handleChange(event, 'questions')} rows="4"></textarea>
//             <textarea defaultValue={this.props.item.solution} onChange = {(event) => this.handleChange(event, 'solution')} rows="4"></textarea>
//             <br/>
//             {/* <button onClick={this.saveBtn}>Save</button> */}


//             </>
//         );
//     }
// }


import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Icon} from 'semantic-ui-react';

class  EditItem extends Component {
    state = {
        questions: '',
        // id: 0,
        isEdit: false,
    }
    componentDidMount = () =>{
        this.setComment();

    }

    // componentWillReceiveProps(){
    //     this.setComment();
    // }

    // componentWillMount(){
    //     this.saveComment();
    // }   

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
    
    updateCurrent = () =>{
        {this.props.reduxStore.allData.questions.map((movieInfo) => {
            this.setState({
                editInfo: {
                    id: movieInfo.questions,
                }
            }) // end setState
        })
    }
    }

    setComment = () =>{
        console.log('id?', this.props.item.id)
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
        // this.setComment();
        // this.props.history.push(`/Edit/${this.props.match.params.id}`)

        this.setState({ isEdit: !this.state.isEdit})

    }
    handleChange = (event) =>{
        console.log('happening: ', event.target.value)
        this.setState({ questions: event.target.value})
        // this.editComment(event);

    }
    deleteComment = () =>{
        console.log('btn click', this.props.item.id)
        if(window.confirm('Are you sure you want to delete this question?')){
            this.props.dispatch({ type: 'DELETE_COMMENT', payload:  {id: this.props.item.id , issues_id: this.props.item.issues_id}})
        }
    }
    render() {
      return (
        <div className="comment">
        {/* <p>{JSON.stringify(this.props.reduxStore.allData.questions)}</p> */}

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
                <Icon name='edit'/>Edit
            </Button>
            
            <Button onClick = {this.deleteComment}>
                <Icon name='delete'/>Delete
            </Button>
            </Button.Group>

            </> 
            : ''
            }
            </> :
            <>
            <p>{this.props.editInfo}:</p>
            <input onChange = {(event) => this.handleChange(event)} value = {this.state.questions}></input>
            <button onClick = {this.saveComment}>Save</button>
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