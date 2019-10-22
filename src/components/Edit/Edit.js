import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';

class Edit extends Component {

    // constructor(props) {
    // super(props);
        state = {
            editInfo: {
                id: 0,
                questions: '',
                solution: ''
            }
    }

    

    componentDidMount() {
        console.log('is it this? ', this.props.match.params.id)
        // {this.props.reduxStore.questions.questions.map((movieInfo) => {
        //     this.setState({
        //         editInfo: {
        //             id: movieInfo.id,
        //             questions: movieInfo.questions,
        //             solution: movieInfo.solution,
        //         }
        //     }) // end setState
        //     console.log('questions and solutions: ', this.setState)

        // })} // end map
        this.props.dispatch({type: 'GET_Q', payload: this.props.match.params.id });
        // this.infoDetails();
    } // end componentDidMount

    componentWillReceiveProps(){
        this.infoDetails();

    }

    componentWillMount(){
        this.infoDetails();
    }    

    infoDetails = () => {
        console.log('questions and solutions1: ', this.state)

        {this.props.reduxStore.allData.questions.map((movieInfo) => {
            this.setState({
                editInfo: {
                    id: movieInfo.id,
                    questions: movieInfo.questions,
                    solution: movieInfo.solution,
                }
            }) // end setState
        })} // end map
    } // end infoDetails

    cancelBtn = (id) => {
        this.props.history.push(`/UserPage`)
    } // end cancelBtn

    saveBtn = () => {
        console.log('is it working?', this.state.editInfo)
        this.props.dispatch({type:'NEW_INFO', payload: this.state.editInfo})
        this.props.history.push(`/UserPage`);
    } // end saveBtn

    handleChange = (event, propertyName) => {
        console.log('in handleChange', event.target.value)

        this.setState({
            editInfo:{
              ...this.state.editInfo,
             [propertyName]: event.target.value,
            }
        }) // end setState
    } // end handleChange

    handleNameChange = (event, propertyName) => {
        console.log('in handleNameChange', event.target.value)

        this.setState({
            editInfo:{
              ...this.state.editInfo,
             [propertyName]: event.target.value,
            }
        }) // end setState
    } // end handleChange

    addNewQA = event => {
        event.preventDefault();
        console.log('btn is getting click', this.state.editInfo)
        event.preventDefault();
        this.props.dispatch({ type: 'POST_NEW', payload:  this.state.editInfo })
        this.setState({
            editInfo: {
                questions: '',
                solution: ''
            }
        });
      }


    render() {
            return (
 
            <div className="editBox">
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.cancelBtn}
          >
              
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.saveBtn}
          >
            Save
          </Button>
        </div>
        <input type='text' placeholder="Question"  onChange={(event) => this.handleNameChange(event, 'questions')} />
        <input type='text' placeholder="Solution"  onChange={(event) => this.handleNameChange(event, 'solution')} />
        <br/>
        <button onClick={this.addNewQA}>Add</button>

                    {/* <button onClick={this.addNew}>Add</button> */}
                <br/>
                <p>{JSON.stringify(this.props.reduxStore.allData.questions)}</p>
                {/* <p>{JSON.stringify(this.state)}</p> */}

 {this.props.reduxStore.allData.questions.map((item) =>(
    <div key={item.questions}>
    {/* <tr>
     <td>    */}
    <textarea onChange = {(event) => this.handleChange(event, 'questions')} rows="4" defaultValue={item.questions}></textarea>
    
    <textarea onChange = {(event) => this.handleChange(event, 'solution')} rows="4" defaultValue={item.solution}></textarea>
    {/* </td>
    </tr> */}
    </div>
))}
             {/* <textarea value={this.state.editInfo.questions} onChange = {(event) => this.handleChange(event, 'questions')} rows="4"></textarea>
             <textarea value={this.state.editInfo.solution} onChange = {(event) => this.handleChange(event, 'solution')} rows="4"></textarea> */}


            </div>
        ) // end return
    } // end render
} // end Edit component
const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
}; // end mapStateToProps

export default connect(mapStateToProps)(Edit);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import EditItem from '../EditItem/EditItem';


// class Edit extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             editInfo: {
//                 // id: '',
//                 questions: '',
//                 solution: ''
//             }
//         }
//     }

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
//                  <p>{JSON.stringify(this.state)}</p>

//             <input type='text' placeholder="Question"  onChange={this.handleNameChange} />
//             <input type='text' placeholder="Solution"  onChange={this.handleNameChange} />
            
//             <button onClick={this.addNewQA}>Add</button>
            
//                 <h2>{this.props.match.params.id}</h2>
//                     {this.props.reduxStore.questions.questions.map((item)=>{
//                     return(
//                     <EditItem item = {item} onChange={this.onChange}/>
//                     )
//                     })}
//             <button onClick={this.saveBtn}>Save</button>

//             </>
//         );
//     }
// }

// const mapStateToProps = reduxStore => ({
//     reduxStore,
// });

// export default connect(mapStateToProps)(Edit);