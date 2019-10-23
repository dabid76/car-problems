// import React, { Component } from 'react';
// import Button from "@material-ui/core/Button";
// import { connect } from 'react-redux';
// // import { EventEmitter } from 'events';

// class Edit extends Component {

//     // constructor(props) {
//     // super(props);
//         state = {
//             editInfo: {}
//     }

    

//     componentDidMount() {
//         console.log('is it this? ', this.props.match.params.id)
//         // {this.props.reduxStore.questions.questions.map((movieInfo) => {
//         //     this.setState({
//         //         editInfo: {
//         //             id: movieInfo.id,
//         //             questions: movieInfo.questions,
//         //             solution: movieInfo.solution,
//         //         }
//         //     }) // end setState
//         //     console.log('questions and solutions: ', this.setState)

//         // })} // end map
//         this.props.dispatch({type: 'GET_Q', payload: this.props.match.params.id });
//         // this.infoDetails();
//     } // end componentDidMount

//     componentWillReceiveProps(){
//         this.infoDetails();

//     }

//     componentWillMount(){
//         this.infoDetails();
//     }    

//     infoDetails = (propertyName) => {
//         console.log('questions and solutions1: ', this.state)

//         {this.props.reduxStore.allData.questions.map((movieInfo) => {
//             this.setState({editInfo: {...this.state.editInfo, 
                
//                     // id: movieInfo.id,
//                     // questions: movieInfo.questions,
                
//             }})
//          })
//          } // end setState

//         //     this.setState({
//         //         editInfo: {
//         //             id: movieInfo.id,
//         //             questions: movieInfo.questions,
//         //             solution: movieInfo.solution,
//         //         }
//         //     }) // end setState
//         // })} // end map
//     } // end infoDetails

//     cancelBtn = (id) => {
//         this.props.history.push(`/UserPage`)
//     } // end cancelBtn

//     saveBtn = (id) => {
//         console.log('is it working?', this.state)
//         this.props.dispatch({type:'NEW_INFO', payload: this.state})
//         // this.props.history.push(`/UserPage`);
//     } // end saveBtn

//     handleChange = (event, propertyName) => {
//         console.log('in handleChange', event.target.value, this.state)

//         this.setState({editInfo: {...this.state.editInfo, 
//             [propertyName]: {
//                 id: propertyName,
                
//                 questions:event.target.value,
//             }
//         }})
//     } // end handleChange

//     handleNameChange = (event, propertyName) => {
//         console.log('in handleNameChange', event.target.value)

//         this.setState({
//             editInfo:{
//               ...this.state.editInfo,
//              [propertyName]: event.target.value,
//             }
//         }) // end setState
//     } // end handleChange

//     addNewQA = event => {
//         event.preventDefault();
//         console.log('btn is getting click', this.state.editInfo)
//         event.preventDefault();
//         this.props.dispatch({ type: 'POST_NEW', payload:  this.state.editInfo })
//         this.setState({
//             editInfo: {
//                 questions: '',
//                 solution: ''
//             }
//         });
//       }


//     render() {
//             return (
 
//             <div className="editBox">
//         <div>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={this.cancelBtn}
//           >
              
//             Cancel
//           </Button>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={this.saveBtn}
//           >
//             Save
//           </Button>
//         </div>
//         <input type='text' placeholder="Question"  onChange={(event) => this.handleNameChange(event, 'questions')} />
//         <input type='text' placeholder="Solution"  onChange={(event) => this.handleNameChange(event, 'solution')} />
//         <br/>
//         <button onClick={this.addNewQA}>Add</button>

//                     {/* <button onClick={this.addNew}>Add</button> */}
//                 <br/>
//                 <p>{JSON.stringify(this.props.reduxStore.allData.questions)}</p>
//                 {/* <p>{JSON.stringify(this.state)}</p> */}

//  {this.props.reduxStore.allData.questions.map((item) =>(
//     <div key={item.questions}>
//     <tr>
//      <td>   
//     <textarea onChange = {(event) => this.handleChange(event, `${item.id}`)} rows="4" defaultValue={item.questions}></textarea>
    
//     <textarea onChange = {(event) => this.handleChange(event, `${item.id}`)} rows="4" defaultValue={item.solution}></textarea>
//     </td>
//     </tr>
//     </div>
// ))}
//              {/* <textarea value={this.state.editInfo.questions} onChange = {(event) => this.handleChange(event, 'questions')} rows="4"></textarea>
//              <textarea value={this.state.editInfo.solution} onChange = {(event) => this.handleChange(event, 'solution')} rows="4"></textarea> */}


//             </div>
//         ) // end return
//     } // end render
// } // end Edit component
// const mapStateToProps = reduxStore => {
//     return {
//         reduxStore
//     }; // end return
// }; // end mapStateToProps

// export default connect(mapStateToProps)(Edit);






// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import EditItem from '../EditItem/EditItem';


// class Edit extends Component {

//     // constructor(props) {
//         // super(props);
//         state = {
//             editInfo: [{
//                 id: 0,
//                 questions: '',
//                 solution: ''
//             }]
//         }
//     // }

//     componentDidMount(){
//         this.ID();
//     }

//     handleNameChange = (event, propertyName) => {
//         console.log('in handleNameChange', event.target.value)

//         this.setState({
//             editInfo:{
//               ...this.state.editInfo,
//              [propertyName]: event.target.value,
//             }
//         }) // end setState
//     } // end handleChange

//     saveBtn = (event, propertyName) => {
//         event.preventDefault();
//         console.log('is it working?', this.state.editInfo)
//         this.props.dispatch({type:'NEW_INFO', payload: this.state.editInfo})
//         this.setState({
//             editInfo: {
//                 ...this.state.editInfo,
//                 [propertyName]: event.target.value,
//               }})
//         this.props.history.push(`/UserPage`);
//         console.log('is it working1?', this.state.editInfo)

//     } // end saveBtn

//     addNewQA = event => {
//         event.preventDefault();
//         console.log('btn is getting click', this.state.editInfo)
//         event.preventDefault();
//         this.props.dispatch({ type: 'POST_NEW', payload: this.state.editInfo })
//         this.setState({
//             editInfo: {
//                 questions: '',
//                 solution: ''
//             }
//         });
//       }

//     ID = () => {
//         this.props.dispatch({type: 'GET_Q', payload: this.props.match.params.id });
// }
//     render() {
//         return (
//             <>
//                  <p>{JSON.stringify(this.state.editInfo.questions)}</p>
//                  <p>{JSON.stringify(this.state.editInfo.solution)}</p>


//             <input type='text' placeholder="Question"  onChange={(event) => this.handleNameChange(event, 'questions')} />
//             <input type='text' placeholder="Solution"  onChange={(event) => this.handleNameChange(event, 'solution')} />
            
//             <button onClick={this.addNewQA}>Add</button>
            
//                 <h2>{this.props.match.params.id}</h2>
//                     {this.props.reduxStore.allData.questions.map((item)=>{
//                     return(
//                     <EditItem key={item.questions} item = {item} onChange={this.onChange}/>
//                     )
//                     })}
//             <button onClick={this.saveBtn}>Save</button>

//             </>
//         );
//     }
// }





import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditItem from '../EditItem/EditItem';

class  Edit extends Component {

    // constructor(props) {
        // super(props);
        // state = {
        //     editInfo: {
        //         id: this.props.reduxStore.allData.questions.issues_id,
        //         questions: '',
        //         solution: ''
        //     }
        // }
    // }

  state = {
    editInfo: {}
  }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_DATA' });

                {this.props.reduxStore.allData.questions.map((movieInfo) => {
            this.setState({
                editInfo: {
                    id: movieInfo.issues_id,
                }
            }) // end setState
        })
    }
}
componentWillReceiveProps = () => {
    {this.props.reduxStore.allData.questions.map((movieInfo) => {
        this.setState({
            editInfo: {
                id: movieInfo.issues_id,
            }
        }) // end setState
    })
}    }
componentWillMount = () => {
    this.props.dispatch({ type: 'GET_DATA' });

    {this.props.reduxStore.allData.questions.map((movieInfo) => {
        this.setState({
            editInfo: {
                id: movieInfo.issues_id,
            }
        }) // end setState
    })
}    
}

    // componentWillUpdate = (prevProps) => {
    //     if (this.props.reduxStore.allData.questions !== prevProps.reduxStore.allData.questions){
    //         const movie = this.props.reduxStore.allData.questions;
    //         //set local state based on Redux state
    //         this.setState({
    //           questions: movie.questions,
    //         })
    //       }   
    // }
    

  handleChange = (event, propertyName) =>{
        //           this.setState({
        //     editInfo:{
        //       ...this.state.editInfo,
        //      [propertyName]: event.target.value,
        //     }
        // }) // end setState
    this.setState({editInfo:{ ...this.state.editInfo, [propertyName]: event.target.value} }, function(){
      console.log(this.state.editInfo);
    })
  }
  handleSubmit = (event, propertyName) =>{
    console.log('btn getting click', this.state)
    console.log('btn getting click', this.state.editInfo)
    console.log('btn1 getting click', this.state.editInfo.questions)
    console.log('btn2 getting click', this.props.reduxStore.allData.questions)
    console.log('btn2 getting click', this.props.reduxStore.allData.questions.id)

    this.props.dispatch({type:'POST_NEW', payload: this.state.editInfo})
    this.setState({editInfo: ''});


    // this.commentInput.value = '';
  }
  handleChange = this.handleChange.bind(this)
  handleSubmit = this.handleSubmit.bind(this)
  render() {
    return (
      <div className="commentList">
              <p>{JSON.stringify( this.props.reduxStore.allData.questions)}</p>
              <p>{JSON.stringify( this.state.editInfo)}</p>

            <input type='text' placeholder="Question!"  onChange={(event) => this.handleChange(event, 'questions')} />
            <input type='text' placeholder="Soluton!"  onChange={(event) => this.handleChange(event, 'solution')} />
        <button onClick = {this.handleSubmit}>Submit</button>
          {this.props.reduxStore.allData.questions.map((item) =>{
            return (
              <EditItem key={item.questions} item = {item} />
            )
          })}
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStateToProps)(Edit);