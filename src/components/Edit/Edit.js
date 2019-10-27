import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditItem from '../EditItem/EditItem';
import { Button, Icon} from 'semantic-ui-react';

class  Edit extends Component {

  state = {
    editInfo: {
        id: this.props.match.params.id,
    }
  }

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_DATA' });
      {this.props.reduxStore.allData.questions.map((movieInfo) => {
        this.setState({
          editInfo: {
          id: movieInfo.issues_id,
        }}) // end setState
      })
    }
  }

  componentWillReceiveProps = () => {
    {this.props.reduxStore.allData.questions.map((movieInfo) => {
      this.setState({
        editInfo: {
        id: movieInfo.issues_id,
      }}) // end setState
    })}    
  }

  componentWillMount = () => {
    this.props.dispatch({ type: 'GET_DATA' });
      {this.props.reduxStore.allData.questions.map((movieInfo) => {
        this.setState({
          editInfo: {
          id: movieInfo.issues_id,
        }}) // end setState
      })
    }}

  handleChange = (event, propertyName) =>{
    this.setState({editInfo:{ ...this.state.editInfo, [propertyName]: event.target.value} }, function(){
      console.log(this.state.editInfo);
    })
  }

  handleSubmit = (event, propertyName) =>{
    console.log('btn getting click', this.state)
    console.log('btn getting click', this.state.editInfo.id)
    console.log('btn1 getting click', this.state.editInfo.questions)
    console.log('btn2 getting click', this.props.reduxStore.user.id)
    console.log('btn2 getting click', this.props.reduxStore.allData.questions)
    console.log('btn2 getting click', this.props.reduxStore.allData.data[1].issues)

    this.props.dispatch({type:'POST_NEW', payload: this.state.editInfo})
    this.setState({editInfo: ''});
  }

  backBtn = () => {
    this.props.history.push(`/UserPage`)
  }

  handleChange = this.handleChange.bind(this)
  handleSubmit = this.handleSubmit.bind(this)

  render() {
        
    let filtered = this.props.reduxStore.allData.data.filter(question => question.id == this.props.match.params.id)

  return (
    <div className="commentList">
      {
        filtered.map((item) =>
        <h2 key={item.id} >{item.issues}</h2>
        )
      }
      <form>
        <p>
          <label>Add New Question</label>
            <input type='text' placeholder="Question!"  onChange={(event) => this.handleChange(event, 'questions')} />
        </p>
        <p>
          <label>Add New Soluton</label>
        </p>
            <input type='text' placeholder="Soluton!"  onChange={(event) => this.handleChange(event, 'solution')} />

        <Button onClick = {this.handleSubmit}><Icon name='plus circle' color='green' align='center' />Add</Button>
      </form>

        {this.props.reduxStore.allData.questions.map((item) =>{
          return (
            <EditItem key={item.questions} item = {item} />
          )
        })}

        <br/><br/>

        <Button animated onClick = {this.backBtn}>
          <Button.Content visible>Back</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow left' />
            </Button.Content>
          </Button>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
    reduxStore,
});

export default connect(mapStateToProps)(Edit);