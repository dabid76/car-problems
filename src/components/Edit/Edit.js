import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux';

class Edit extends Component {

        constructor(props) {
            super(props);
            this.state = {
                newInfo: {
                id: '',
              questions: [],
              solution: []
                }
            }
    
          }

    componentDidMount() {
        console.log('is it this? ', this.props.match.params.id)

        this.props.dispatch({type: 'GET_Q', payload: this.props.match.params.id });
        this.infoDetails();
    } // end componentDidMount

    

    infoDetails = () => {
        {this.props.reduxStore.questions.questions.map((movieInfo) => {
            this.setState({
                newInfo: {
                    id: movieInfo.id,
                    questions: movieInfo.questions,
                    solution: movieInfo.solution,
                }
            }) // end setState
        })} // end map
    } // end infoDetails

    saveBtn = (id) => {
        this.props.dispatch({type:'NEW_INFO', payload: this.state.editInfo})
        this.props.history.push(`/UserPage`);
    } // end saveBtn

    handleChange = (event, propertyName) => {
        console.log('in handleChange')

        this.setState({
            newInfo:{
              ...this.state,
             [propertyName]: event.target.value,
            }
        }) // end setState
    } // end handleChange

    handleNameChange = (event, propertyName) => {
        console.log('in handleChange')

        this.setState({
            newInfo:{
              ...this.state.questions,
             [propertyName]: event.target.value,
            }
        }) // end setState
    } // end handleChange


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
        <input type='text' value={this.state.questions} onChange={this.handleNameChange} />
        <input type='text' value={this.state.solution} onChange={this.handleNameChange} />

                    {/* <button onClick={this.addNew}>Add</button> */}
                <br/>
                <br/>
 
{this.props.reduxStore.questions.questions.map((item) =>(
    <tr >
     <td>   
    <textarea onChange = {(event) => this.handleChange(event, 'questions')} rows="4" value={item.questions}></textarea>
    
    <textarea onChange = {(event) => this.handleChange(event, 'solution')} rows="4" value={item.solution}></textarea>
    </td>
    </tr>
))}
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