import React, { Component } from 'react';
import {connect} from 'react-redux';



class WhatsWrong extends Component {

  componentDidMount(id) {
    this.props.dispatch({ type: 'GET_DATA' });
    // this.props.dispatch(action);
  }

    state =
     {value: ''};
  
    
  handleChange = (event) =>{

    this.setState({value: event.target.value});
  }
    
  handleSubmit = (id) => {
    console.log('this is happening: ', this.state.value)

      this.props.history.push(`/one/${this.state.value}`)
      // this.props.dispatch({ type: 'GET_Q', payload: this.state.value });

      // event.preventDefault();
  }
    
render() {
  // let item = this.props.item;

  return (

    <div>
        <h1>
        What's Wrong?
        </h1>
      <br/>
      <select onChange={this.handleChange} value={this.select} required>
          <option value="default" >-- Select Tag --</option>
        {
          this.props.reduxStore.data.map(item =>
            <option key={item.id} value={item.id}>{item.issues}</option>
          )
        }
      </select>
      <button onClick={()=>{this.handleSubmit(this.props.match.params.id)}}>Submit</button>

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