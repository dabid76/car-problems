import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Icon} from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

class WhatsWrong extends Component {

  componentDidMount(id) {
    this.props.dispatch({ type: 'GET_DATA' });
  }

  state = {
    value: '',
    // newQ: {
    //     id: 0,
    // }
}
    
  handleChange = (event) =>{

    this.setState({
      value: event.target.value
    });
  }
    
  handleSubmit = (id) => {
    console.log('this is happening: ', this.state.value)
    // this.props.dispatch({ type: 'GET_Q', payload: this.state.value });

    this.props.history.push(`/one/${this.state.value}`)

      // this.props.dispatch({ type: 'GET_Q', payload: this.state.value });

  }
    
render() {

  return (

    <div>
        <h1>
        What's Wrong?
        </h1>
      <br/>
      {/* {JSON.stringify(this.props.reduxStore)} */}
      <select onChange={this.handleChange} value={this.select} required>
          <option value="default" disabled selected>-- Select Issue --</option>

        {
          
          this.props.reduxStore.allData.data.map(item =>
            <option key={item.id} value={item.id}>{item.issues}</option>
          )
        }
      </select>
       {/* <IconButton onClick={()=>{this.handleSubmit(this.props.match.params.id)}}className={useStyles.button}>
       Submit
                        </IconButton> */}
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