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
}

function* postNew(action){
  try{
    yield console.log(action.payload);

    yield axios.post('/allData/newQA', action.payload);
    // yield getQ(action);
    yield put({type: 'GET_Q', payload: action.payload.id })
  }catch(error){
    console.log('error psoting new question', error);
  }
}

function* newInfo(action){
    try{
      yield console.log(action.payload);
      yield axios.put('/allData/newInfo', action.payload);
      yield getData();
      // yield getQ(action);
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
        console.log('action', action);
        
        let response = yield axios.get(`/allData/questions/${action.payload}`)
        yield put({type: 'SET_Q', payload: response.data})
    } catch (error) {
        console.log('error with getting the questions', error); 
    } // end try
} // end getDetails saga




export default rootSaga;
