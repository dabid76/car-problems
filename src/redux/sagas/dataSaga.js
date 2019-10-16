import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_DATA', getData);
    yield takeEvery('GET_Q', getQ);
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
        let response = yield axios.get(`/allData/questions/${action.payload}`)
        yield put({type: 'SET_Q', payload: response.data})
    } catch (error) {
        console.log('error with getting the answers', error); 
    } // end try
} // end getDetails saga

// Create sagaMiddleware
// const sagaMiddleware = createSagaMiddleware();



export default rootSaga;
