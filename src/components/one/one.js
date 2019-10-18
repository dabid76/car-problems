import React, { Component } from 'react';
import {connect} from 'react-redux';

// const headsOrTails = () => (Math.random() < 0.5);

let nextQ;

class one extends Component {
    constructor(props) {
        super(props);
        this.state = {
          questions: []
        };
        this.noBtn = this.noBtn.bind(this);
      }

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_Q', payload: this.props.match.params.id });

        // this.props.dispatch({ type: 'GET_Q', payload: this.state.value });

        // this.setState({
        //     questions: this.props.reduxStore.questions.questions,
        // })

        console.log('log', this.state.question);
        console.log('new log', this.props.reduxStore.questions.questions);

 
    this.getQuestions();
    
    }
    getQuestions = () =>{
        // this.props.dispatch({type: 'GET_Q', payload: this.props.match.params.id });
        // this.props.dispatch({type: this.props.reduxStore.questions.questions});
        console.log('id:', this.state.id);
        console.log('new log', this.props.reduxStore.questions.questions);
        this.setState({
            questions: this.props.reduxStore.questions.questions,
        })
        // this.noBtn = this.noBtn.bind(this);
    }


    
    yesBtn = (id) => {
        console.log ('finding the solution', this.props.reduxStore.solution);

    if ( this.yesBtn === this.yesBtn ) {
    //   console.log ('finding the solution', this.state.questions.solution);

    }
  }

  
    noBtn = (pizza) => {
        // this.noBtn = this.noBtn.bind(this);
        console.log('btn getting click questions', this.props.reduxStore.questions.questions[0])
        // this.setState({
        //     questions:  +1
        //   });
        // console.log('removing product from cart. State:', this.state);
        // let index = this.state.questions.indexOf(pizza);
        // let nextQ = this.state.questions
        // nextQ.splice(index, 1)

        let index = this.props.reduxStore.questions.questions.map(x => {
            return x.Id;
          }).indexOf(1);
          this.props.reduxStore.questions.questions.shift(index, 1)
          this.setState({
            ...this.state,
            questions: nextQ,
        })
          
          console.log('nextQ1', this.props.reduxStore.questions.questions);
        console.log('nextQ', nextQ)
    }

    
      render() {
        // let secondQ = this.props.reduxStore.questions.questions;
console.log('log1', this.props.reduxStore.questions.questions[0])
console.log('log1', this.props.reduxStore.questions.questions[1])
console.log('log1', this.props.reduxStore.questions.questions[2])
// console.log('secondQ[0]', secondQ[0])
console.log('local state:', this.state.questions);
// let nextQ;

    let issueQ = this.props.reduxStore.questions.questions.map((item, id) => {
        if( id == 0){
      nextQ = <h1 key={item.id}>{item.questions}</h1>
        }
        // return (<ul><li><span>{item.questions[0]}</span></li></ul>)

    })
      
        return (


          
          <div className="movieDetailsDiv">
              {/* <form onSubmit={this.noBtn}>
                  <input type='submit' value="no" />
              </form> */}
              {/* {this.state.questions.length == 0 ? '':
                <h1>{this.state.questions[0].questions}</h1>} */}
            {issueQ}
            {nextQ}
            

            <button onClick={this.yesBtn}>Yes</button> 
            <button onClick={this.noBtn} pizza={this.state}>No</button>
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