import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_DATA', getData);
    yield takeEvery('GET_Q', getQ);
    yield takeEvery('POST_ISSUE', postIssue);
    yield takeEvery('DEL_DATA', DelData);
    yield takeEvery('NEW_INFO', newInfo);
    yield takeEvery('POST_NEW', postNew);
    yield takeEvery('DELETE_COMMENT', delCom);
}

function* postNew(action){
  try{
    yield console.log('what???', action.payload.store);
    yield console.log('what???', action.payload.id);
    yield console.log('what???', action.payload.issues_id);
    yield console.log('what???', action.payload.editInfo);
    yield console.log('what???', action.payload);

    yield axios.post('/allData/newQA', action.payload);
    yield put({type: 'GET_Q', payload: action.payload.id})

  }catch(error){
    console.log('error psoting new question', error);
  }
}

function* newInfo(action){
  console.log('in datasage newinfo', action.payload.questions)
  console.log('in id newinfo', action.payload.id)
    try{
      yield console.log(action.payload);
      yield axios.put('/allData/newInfo', action.payload);
      
      yield console.log('what is?: ')
      yield put({type: 'GET_Q', payload: action.payload.issues_id})

    }catch(error){
      console.log('error updating new info', error);
    } // end try
  } // end newInfo saga

  function* postIssue(action){
    try{
      yield axios.post('/allData/newIssue/', action.payload);
      yield put({type: 'GET_DATA'})
    }catch(error){
      console.log('error psoting new issue', error);
    }
  }

  function* DelData(id) {
    try {
      yield axios.delete(`/allData/delete/${id.payload}`);
      yield put({ type: 'GET_DATA'});
    } catch (error) {
      console.log('error while delete issue', error);
    }
  }  
  
  function* delCom(id) {
    console.log('what', id.payload.issues_id)
    try {
      yield axios.delete(`/allData/deleteCom/${id.payload.id}`);
      yield put({ type: 'GET_Q', payload: id.payload.issues_id});
    } catch (error) {
      console.log('error while delete question', error);
    }
  }

function* getData(){
    try {
        const response = yield axios.get('/allData');
        yield put({ type: 'ALL_DATA', payload: response.data });
    } catch(error) {
        console.log('error while getting data', error);
    } // end try
  } // end getPic saga

  function* getQ(action){
    try {
      console.log('action', action.payload);
      
      let response = yield axios.get(`/allData/questions/${action.payload}`)
      yield put({type: 'SET_Q', payload: response.data})
    } catch (error) {
        console.log('error with getting the questions', error); 
    } // end try
} // end getDetails saga




export default rootSaga;
