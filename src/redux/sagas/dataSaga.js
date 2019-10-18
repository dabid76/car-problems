import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_DATA', getData);
    yield takeEvery('GET_Q', getQ);
    // yield takeEvery('NEW_Q', newQ);
    // yield takeEvery('GET_S', getS);
}

// function* newQ(action){
//     try{
//       yield axios.get('/allData/newQuestions/', action.payload);
//       yield put({type: 'SET_Q'})
//     }catch(error){
//       console.log('error getting new question', error);
//     }
//   }

//   function* getS(action){
//     try {
//         console.log('action', action);
        
//         let response = yield axios.get(`/allData/solution/${action.payload}`)
//         yield put({type: 'SET_S', payload: response.data})
//     } catch (error) {
//         console.log('error with getting the solutions', error); 
//     } // end try
// } // end getDetails saga

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
