  
// import React, { Component } from 'react';
// import { connect } from 'react-redux';


// class EditItem extends Component {

//         constructor(props) {
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
//         this.infoDetails();
//     }

//         componentWillReceiveProps(){
//         this.infoDetails();

//     }

//     infoDetails = () => {
//         console.log('questions and solutions1: ', this.state)

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
//       <p>{JSON.stringify(this.props.item)}</p>

//             {/* <input type='text' placeholder="Question"  onChange={this.handleNameChange} />
//             <input type='text' placeholder="Solution"  onChange={this.handleNameChange} />
            
//             <button onClick={this.addNewQA}>Add</button> */}
//             <br/>
//             <textarea value={this.state.editInfo.questions} onChange = {(event) => this.handleChange(event, 'questions')} rows="4"></textarea>
//             <textarea value={this.state.editInfo.solution} onChange = {(event) => this.handleChange(event, 'solution')} rows="4"></textarea>
//             <br/>
//             {/* <button onClick={this.saveBtn}>Save</button> */}


//             </>
//         );
//     }
// }

// const mapStateToProps = reduxStore => ({
//     reduxStore,
// });

// export default connect(mapStateToProps)(EditItem);