import React, { Component } from 'react';
import {connect} from 'react-redux';

// const headsOrTails = () => (Math.random() < 0.5);


class one extends Component {
    state = {

       id: 1,  
    //    question: 'hi',
       questions: []
    }

    componentDidMount() {
        // this.props.dispatch({ type: 'GET_Q', payload: this.state.value });

        // this.setState({
        //     questions: this.props.reduxStore.questions.questions,
        // })

        console.log('log', this.state.question);
        console.log('new log', this.props.reduxStore.questions.questions);

 
    this.getQuestions();
    
    }
    getQuestions = () =>{
        this.props.dispatch({type: 'GET_Q', payload: this.props.match.params.id });
        // this.props.dispatch({type: this.props.reduxStore.questions.questions});
        console.log('id:', this.state.id);
        console.log('new log', this.props.reduxStore.questions.questions);
        this.setState({
            questions: this.props.reduxStore.questions.questions,
        })
    }


    
    yesBtn = (id) => {
    console.log('btn getting click', this.props.match.params.id)

    if ( this.yesBtn === this.yesBtn ) {
      console.log (this.props.reduxStore.questions.questions);

    }
  }

  
    noBtn = (pizza) => {
        console.log('removing product from cart. State:', this.state);
        let index = this.state.questions.indexOf(pizza);
        let nextQ = this.state.questions
        nextQ.splice(index, 1)
        this.setState({
            ...this.state,
            questions: nextQ,
        })

        console.log('nextQ', nextQ)
    }
    
      render() {
        let secondQ = this.props.reduxStore.questions.questions;
console.log('log1', this.props.reduxStore.questions.questions[0])
console.log('log1', this.props.reduxStore.questions.questions[1])
console.log('log1', this.props.reduxStore.questions.questions[2])
console.log('secondQ[0]', secondQ[0])
console.log('local state:', this.state.questions);
        return (


          
          <div className="movieDetailsDiv">
              {/* <form onSubmit={this.noBtn}>
                  <input type='submit' value="no" />
              </form> */}
              {this.state.questions.length == 0 ? '':
                <h1>{this.state.questions[0].questions}</h1>}
            {/* {qAnswers} */}
            {/* <ul>
                {this.state.questions.map((genre, i)=>{
                return <li>{genre.questions}</li>    
                })}
            </ul> */}
            <button onClick={this.yesBtn} pizza={this.state}>Yes</button> 
            <button onClick={this.noBtn}>No</button>
            <p>{JSON.stringify(this.props.reduxStore.questions.questions)}</p>
          </div>
    

        );
      }
    } 
  
  const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }; // end return
  }; // end mapStateToProps
  
  export default connect(mapStateToProps)(one);