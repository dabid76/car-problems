import React, { Component } from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert';
import { Button, Icon} from 'semantic-ui-react';

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
    this.getQuestions();
    }
    getQuestions = () =>{
      this.setState({
        questions: this.props.reduxStore.allData.data,
        solution: this.props.reduxStore.allData.questions,
      })
    }

  yesBtn = () => {
    if ( this.yesBtn == this.yesBtn ) {
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
  }

  noBtn = (event) => {
    let index = this.props.reduxStore.allData.data.map(x => {
        return x.Id;
      }).indexOf(1);
      this.props.reduxStore.allData.questions.shift(index, 1)
      this.setState({
        ...this.state,
        questions: nextQ,
      })
      if( this.props.reduxStore.allData.questions.length < 1){
        swal("Oops!", "CAN'T FIGURE OUT THE PROBLEM, TAKE TO MECHANIC, going back to issues page", "error")
          .then(function() {
            window.location.href = '/#/WhatsWrong';
          });
      }
    }
    
  render() {
    let issueQ = this.props.reduxStore.allData.questions.map((item, id) => {
        if( id == 0){
      nextQ = <h1 key={item.id}>{item.questions}</h1>
        }
    })

  return (

    <div>
      {issueQ}
      {nextQ}
      <br/>
      <br/>
      <br/>    
      <br/>
      <br/>
      <div className="yesBtn">
      <Button onClick={this.yesBtn}><Icon name='thumbs up' size='big' color='black' />Yes</Button>             
      <Button onClick={this.noBtn}><Icon name='thumbs down' size='big' color='black' />No</Button>
      </div>
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