import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Icon} from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';

class WhatsWrong extends Component {

  componentDidMount(id) {
    this.props.dispatch({ type: 'GET_DATA' });
  }

  state = {
    value: '',
  }
    
  handleChange = (event) =>{
    this.setState({
      value: event.target.value
    });
  }
    
  handleSubmit = (id) => {
    console.log('this is happening: ', this.state.value)
    this.props.history.push(`/one/${this.state.value}`)
  }
    
render() {

  return (

    <div>
        <h1>
        What's Wrong?
        </h1>
      <br/>
      <select className="select-css" onChange={this.handleChange} value={this.select} required>
          <option defaultValue>-- Select Issue --</option>

        {  this.props.reduxStore.allData.data &&
            this.props.reduxStore.allData.data.map(item =>
              <option key={item.id} value={item.id}>{item.issues}</option>
            )
        }
      </select>
      <Button onClick={()=>{this.handleSubmit(this.props.match.params.id)}}><Icon name='check square' color='green'/>Submit</Button>
    </div>
    );
  }
} 
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(WhatsWrong);