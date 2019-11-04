import { combineReducers } from 'redux';

// Used to store movies returned from the server
const carData = (state = [], action) => {
    switch (action.type) {
        case 'ALL_DATA':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const questions = (state = [], action) => {
    switch (action.type) {
        case 'SET_Q':
            return action.payload;
        default:
            return state;
    } // end switch
} // end genres

export default combineReducers({
    carData,
    questions,
    // newQS
  });