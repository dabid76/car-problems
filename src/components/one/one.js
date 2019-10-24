import React, { Component } from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert';

let nextQ;

class one extends Component {
    constructor(props) {
        super(props);
        this.state = {
          questions: [],
          solution: []
        };
        this.noBtn = this.noBtn.bind(this);
        this.yesBtn = this.yesBtn.bind(this);

      }

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_Q', payload: this.props.match.params.id });
        // this.props.dispatch({type: 'GET_S', payload: this.props.match.params.id });

        // this.props.dispatch({ type: 'GET_Q', payload: this.state.value });

        // this.setState({
        //     questions: this.props.reduxStore.questions.questions,
        // })

        // console.log('log', this.state.question);
        // console.log('new question', this.props.reduxStore.questions.questions);
        // console.log('solution', this.props.reduxStore.questions.solution);

 
    this.getQuestions();
    
    }
    getQuestions = () =>{
        // this.props.dispatch({type: 'GET_Q', payload: this.props.match.params.id });
        // this.props.dispatch({type: this.props.reduxStore.questions.questions});
        // console.log('id:', this.state.id);
        // console.log('new log', this.props.reduxStore.questions.questions);
        // console.log('new solution', this.props.reduxStore.questions.solution);

        this.setState({
            questions: this.props.reduxStore.allData.data,
            solution: this.props.reduxStore.allData.questions,
        })
        // this.noBtn = this.noBtn.bind(this);
    }


    
    yesBtn = (props) => {
        // console.log ('finding the solution', this.props.reduxStore.allData.solution);

      //   let index = this.props.reduxStore.allData.data.map(x => {
      //     return x.Id;
      //   }).indexOf(1);
      //   this.props.reduxStore.allData.questions.shift(index, 1)
      //   this.setState({
      //     ...this.state,
      //     questions: nextQ,
      // })
        // console.log('solution', this.props.reduxStore.allData.questions[0].solution);

    if ( this.yesBtn == this.yesBtn ) {
      // swal("Oops!", "Something went wrong!", "error");
      swal({
        title: this.props.reduxStore.allData.questions[0].solution,
        text: "Problem fix?",
        icon: "warning",
        buttons: [
          `No, it didn't!`,
          'Yes, it did!'
        ],
        dangerMode: true,
      }).then(function(isConfirm) {
        if (isConfirm) {
          swal({
            title: 'GREAT!',
            text: 'Going to home page',
            icon: 'success'
          }).then(function() {
            window.location.href = '/#/Home';
          });
        } else {
          
          }
      })
    }

      // (window).confirm(this.props.reduxStore.allData.questions[0].solution)

    // } 
    // else if (this.noBtn = this.noBtn.bind(this)){

    // }
  }

  
    noBtn = (event) => {

      event.preventDefault();

        let index = this.props.reduxStore.allData.data.map(x => {
            return x.Id;
          }).indexOf(1);
          this.props.reduxStore.allData.questions.shift(index, 1)
          this.setState({
            ...this.state,
            questions: nextQ,
        })
        if( this.props.reduxStore.allData.questions.length < 1){
      swal("Oops!", "You max out on questions, going back to issues page", "error")
      .then(function() {
        window.location.href = '/#/WhatsWrong';
      });
        }

          
          // console.log('nextQ1', this.props.reduxStore.questions.questions);
        // console.log('nextQ', nextQ)
    }

    
      render() {

    let issueQ = this.props.reduxStore.allData.questions.map((item, id) => {
        if( id == 0){
      nextQ = <h1 key={item.id}>{item.questions}</h1>
        }

    })
    // let issueQA = this.props.reduxStore.questions.questions.solution.map((item, id) => {
    //     if( id == 0){
    // solutionToQ = <h1 key={item.id}>{item.solution}</h1>
    //     }
    // })
      
        return (


          
          <div className="movieDetailsDiv">
              {/* <form onSubmit={this.noBtn}>
                  <input type='submit' value="no" />
              </form> */}
              {/* {this.state.questions.length == 0 ? '':
                <h1>{this.state.questions[0].questions}</h1>} */}
            {issueQ}
            {nextQ}
            {/* {issueQA}
            {solutionToQ} */}
            

            <button onClick={this.yesBtn}>Yes</button> 
            <button onClick={this.noBtn} pizza={this.state}>No</button>
            {/* <p>{JSON.stringify(this.props.reduxStore.questions.questions[0])}</p> */}
            <p>{JSON.stringify(this.props.reduxStore.allData.questions.length)}</p>

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