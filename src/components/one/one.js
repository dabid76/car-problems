import React, { Component } from 'react';
import {connect} from 'react-redux';

const headsOrTails = () => (Math.random() < 0.5);


class one extends Component {

  state = {
    value: ''
  };

  componentDidMount() {
    // const action = {type: 'GET_DATA'};
    this.props.dispatch({ type: 'GET_Q', payload: this.props.match.params.id  })
  }
    
  handleSubmit = (id) => {
    console.log('btn getting click', this.props.match.params.id)
    // alert('Need New Brakes');
    // this.props.dispatch({ type: 'GET_DATA', payload: id });
    // if ( this.state.value === true ) {
    //   console.log ('Going Out!');
    // } else if ( this.state.value !== true )  {
    //   console.log ('ChillZone');
    // }
  }

    // this.props.history.push('/')
    // event.preventDefault();
  
    
      render() {

        let qAnswers;

        let answers = this.props.reduxStore.questions.map((qA, id) => {
            if( id === 0) {
              qAnswers = <p key={qA.id}>{qA.questions}</p>;

            } else {
              id++
            }
        }) // end map
        return (


        
          
          <div className="movieDetailsDiv">
          {answers}
            {qAnswers}
            <button onClick={this.handleSubmit} value='1'>Yes</button> 
            <button onClick={this.handleSubmit} value='2'>No</button>
          </div>
    

    
            // <>
            //  <h1>
            // Need New Brakes
            // </h1>
            // <p>
                // Problem fix?
            // </p> 
            
            // <button onClick={this.handleSubmit}>Yes</button> 
            // </> 

        );
      }
    } 
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(one);